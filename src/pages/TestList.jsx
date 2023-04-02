import React from "react";
import { Link } from "react-router-dom";
import "../css/TestList.css";
import { ACTIONS } from "../state/action";
import { useStateValue } from "../state/StateProvider";

const TestList = () => {
  const [, dispatch] = useStateValue();
  return (
    <div className="testList-container">
      <div className="btn-container">
        <Link to="/React">
          <button
            className="btn"
            onClick={() => dispatch({ type: ACTIONS.RESET })}
          >
            React
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestList;
