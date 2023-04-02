import "../css/Result.css";
import React from "react";
import { useStateValue } from "../state/StateProvider";

const Result = () => {
  const [state] = useStateValue();
  return (
    <div className="result">
      <h3>Correct Answer:{state.correctAnswer}</h3>
      {state.correctAnswer >= 5 ? (
        <h2 className="passed">Passed!</h2>
      ) : (
        <h2 className="failed">Failed!</h2>
      )}
    </div>
  );
};

export default Result;
