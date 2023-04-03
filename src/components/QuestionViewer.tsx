import React, { useEffect, useState } from "react";
import Questions from "../data/data/React.json";
import SingleQuestion from "./SingleQuestion";
import { QuestionType } from "../types";

const QuestionViewer = () => {
  const totalQuestions = 15;
  const questionsNeedsRightToPass = 10;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>();
  const [selectedOption, setSelectedOption] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number[]>([]);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  function getRandomQuestion() {
    let index = Math.floor(Math.random() * Questions.length);
    if (previousIndex.includes(index)) getRandomQuestion();
    setPreviousIndex((prev) => [...prev, index]);
    return Questions[index];
  }

  const handleOption = (i: number) => {
    setSelectedOption(i);
    if (i === currentQuestion?.correctOptionIndex) console.log("correct");
    else console.log("wrong");
  };
  const handleNextClick = () => {
    if (selectedOption === currentQuestion?.correctOptionIndex)
      setCorrectAnswer((n) => n + 1);

    setCurrentQuestion(getRandomQuestion());
    setQuestionNumber((n) => n + 1);
  };
  return (
    <div>
      {questionNumber <= totalQuestions ? (
        <div>
          <span>
            {questionNumber}/{totalQuestions}
          </span>
          <SingleQuestion
            data={currentQuestion}
            setOption={handleOption}
            onNextClick={handleNextClick}
          />
          <button className="bg-blue-400" onClick={handleNextClick}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <p>Result</p>
          <p>Correct Answer:{correctAnswer}</p>

          {correctAnswer >= 10 ? <span>Pass</span> : <span>Fail</span>}
        </div>
      )}
    </div>
  );
};

export default QuestionViewer;
