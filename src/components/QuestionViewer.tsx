import React, { useEffect, useState } from "react";
import Questions from "../data/React.json";
import SingleQuestion from "./SingleQuestion";
import { QuestionType } from "../types";

const QuestionViewer = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>();
  let previousIndex: number[] = [];

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  function getRandomQuestion() {
    let index = Math.floor(Math.random() * Questions.length);
    if (previousIndex.includes(index)) getRandomQuestion();
    previousIndex.push(index);
    return Questions[index];
  }

  const handleOption = (i: number) => {
    if (i === currentQuestion?.correctOptionIndex) console.log("correct");
    else console.log("wrong");
  };
  return (
    <div>
      <SingleQuestion data={currentQuestion} setOption={handleOption} />
      <button onClick={() => setCurrentQuestion(getRandomQuestion())}></button>
    </div>
  );
};

export default QuestionViewer;
