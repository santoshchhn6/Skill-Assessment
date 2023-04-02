import React, { useEffect, useState } from "react";
import "../css/Questions.css";
import { ACTIONS } from "../state/action";
import { useStateValue } from "../state/StateProvider";
import Option from "./Option";

const Questions = (props) => {
  let time = 90;
  const [count, setCount] = useState(time);
  const [state, dispatch] = useStateValue();
  const timer = () => setCount(count - 1);

  useEffect(() => {
    if (count <= 0) {
      setCount(count + time);
      nextQuestion();
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [count]);

  const optionList = () => {
    let option_id = 0;
    return props.question.option.map((opt) => {
      option_id++;
      let id = props.question._id + "" + option_id;
      let correct = false;
      if (props.question.correctOption === option_id) {
        correct = true;
      }

      return <Option option={opt} id={id} correctOption={correct} />;
    });
  };

  const nextQuestion = () => {
    if (state.selectedOption) {
      dispatch({ type: ACTIONS.INCREASE_CORRECT_ANSWER });
    }
    dispatch({ type: ACTIONS.DISABLE_NEXT_BUTTON });
    dispatch({ type: ACTIONS.CHANGE_QUESTION });
    // console.log(state.correctAnswer);
    // console.log(state.selectedOption);

    setCount(time);
  };

  return (
    <div className="question-container">
      <div>
        <h4>
          {state.questionCount}/{state.totalQuestion}
        </h4>
        <p className="timer">{count}</p>
        <button
          id="btnNext"
          onClick={nextQuestion}
          disabled={state.disabletNextBtn}
        >
          Next
        </button>
      </div>

      <h3>{props.question.question}</h3>
      <pre>{props.question.code}</pre>
      <ul key={props.id}>{optionList()}</ul>
    </div>
  );
};

export default Questions;
