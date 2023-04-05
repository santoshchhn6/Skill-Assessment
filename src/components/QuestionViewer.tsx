import React, { useEffect, useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { QuestionType, SovedQuestionType } from "../types";
import { useLocation } from "react-router-dom";
import Result from "./Result";

const QuestionViewer = () => {
  const { state: Questions } = useLocation();

  const totalQuestions = 15;
  const correctAnswersNeedsToPass = 10;
  const timeOutSecond = 90;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({
    question: "",
    code: "",
    options: [],
    correctOptionIndex: 0,
  });

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);
  const [time, setTime] = useState<number>(timeOutSecond);
  const [solvedQuestions, setSolvedQuestions] = useState<SovedQuestionType[]>(
    []
  );

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  useEffect(() => {
    //Question timeout
    const interval = setInterval(() => {
      setTime((n) => n - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getRandomQuestion() {
    let index = Math.floor(Math.random() * Questions.length);
    if (previousIndex.includes(index)) getRandomQuestion();
    setPreviousIndex((prev) => [...prev, index]);
    return Questions[index];
  }

  const handleNextClick = () => {
    if (selectedRadio === currentQuestion?.correctOptionIndex) {
      setCorrectAnswer((n) => n + 1);
    }

    setCurrentQuestion(getRandomQuestion());
    setQuestionNumber((n) => n + 1);
    setSelectedRadio(null);
    setTime(timeOutSecond);

    const newSolvedQuestion: SovedQuestionType = {
      ...currentQuestion,
      userChoosenOptionIndex: selectedRadio,
    };
    setSolvedQuestions((prev) => [...prev, newSolvedQuestion]);
  };

  const convertSecondsToMinutes = (sec: number): string => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    let secStr = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + secStr;
  };

  if (time <= 0) {
    handleNextClick();
  }
  return (
    <div>
      {questionNumber <= totalQuestions ? (
        <div className="border-b-2 border-gray-400">
          <div className="flex justify-between p-3 font-mono text-xl border-b-2 border-gray-400 mb-3">
            <span>{convertSecondsToMinutes(time)}</span>
            <span>
              {questionNumber}/{totalQuestions}
            </span>
          </div>

          <SingleQuestion
            questionNumber={questionNumber}
            data={currentQuestion}
            selectedRadio={selectedRadio}
            setSelectedRadio={(i: number) => setSelectedRadio(i)}
          />
          <button
            className="bg-gray-400 p-1 px-2 rounded m-3 hover:bg-gray-300"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      ) : (
        <Result
          correctAnswer={correctAnswer}
          correctAnswersNeedsToPass={correctAnswersNeedsToPass}
          solvedQuestions={solvedQuestions}
        />
      )}
    </div>
  );
};

export default QuestionViewer;
