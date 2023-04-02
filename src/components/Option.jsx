import React from "react";
import "../css/Option.css";
import { ACTIONS } from "../state/action";
import { useStateValue } from "../state/StateProvider";

const Option = (props) => {
  const [, dispatch] = useStateValue();
  const isCorrect = () => {
    // if (props.correctOption) {
    //   console.log("Correct");
    // } else {
    //   console.log("wrong");
    // }
    dispatch({ type: ACTIONS.SELECT_OPTION, payload: props.correctOption });
    dispatch({ type: ACTIONS.ENABLE_NEXT_BUTTON });
  };

  return (
    <li>
      <input type="radio" name="option" key={props.id} onClick={isCorrect} />
      {props.option}
    </li>
  );
};

export default Option;
