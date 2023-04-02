import React, { useEffect, useState } from "react";
import axios from "axios";
import Questions from "./Questions";
import "../css/PracticeTest.css";
import { useStateValue } from "../state/StateProvider";
import { ACTIONS } from "../state/action";
import Result from "./Result";

const ReactTest = () => {
  const [databaseName, setDatabaseName] = useState("Test");
  const [state, dispatch] = useStateValue();

  const getQuestions = async () => {
    const response = await axios("http://localhost:5000/questions/");
    dispatch({ type: ACTIONS.SET_QUESTIONS, payload: response.data });
    setQuestionLength(response.data.length);
    dispatch({ type: ACTIONS.CHANGE_QUESTION });
  };

  const setArrayLength = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  const setQuestionLength = (n) => {
    dispatch({ type: ACTIONS.SET_ARRAY, payload: setArrayLength(n) });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const questionsList = () => {
    if (state.questions.length !== 0) {
      if (state.questionCount <= state.totalQuestion)
        return <Questions question={state.question} />;
      else if (state.questionCount >= state.totalQuestion + 1)
        return <Result />;
    }
  };

  return <div className="practiseTest-container">{questionsList()}</div>;
};

export default ReactTest;
