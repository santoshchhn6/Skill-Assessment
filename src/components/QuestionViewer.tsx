import React, { useEffect, useState } from "react";
import Questions from "../data/data/React.json";
import SingleQuestion from "./SingleQuestion";
import { QuestionType } from "../types";

const QuestionViewer = () => {
  const totalQuestions = 15;
  const correctAnswersNeedsToPass = 10;
  const timeOutSecond = 90;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>();
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);
  const [time, setTime] = useState<number>(timeOutSecond);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  useEffect(() => {
    //Question timeout
    const interval = setInterval(() => {
      setTime((n) => n - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestion]);

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
  };

  const convertSecondsToMinutes = (sec: number): string => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    let secStr = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + secStr;
  };

  if (time <= 0) {
    setTime(timeOutSecond);
    handleNextClick();
  }
  return (
    <div>
      {questionNumber <= totalQuestions ? (
        <div>
          <span>{convertSecondsToMinutes(time)} </span>
          <span>
            {questionNumber}/{totalQuestions}
          </span>
          <SingleQuestion
            data={currentQuestion}
            selectedRadio={selectedRadio}
            setSelectedRadio={(i: number) => setSelectedRadio(i)}
          />
          <button className="bg-blue-400" onClick={handleNextClick}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <p>Result</p>
          <p>Correct Answer:{correctAnswer}</p>

          {correctAnswer >= correctAnswersNeedsToPass ? (
            <span>Pass</span>
          ) : (
            <span>Fail</span>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionViewer;
