import { useLocation } from "react-router-dom";
import { SovedQuestionType } from "../types";

const SolvedQuestions = () => {
  const {state}=useLocation();
  const Questions:SovedQuestionType[]=state;
  return (
    <div>
      {Questions.map((data, i) => (
        <div key={i} className="m-3 bg-gray-300 p-3 rounded shadow-sm">
          <h3 className="font-bold mb-3">
            Q{i + 1}. {data?.question}
          </h3>
          {data?.code ? (
            <pre className="text-blue-500 mb-3 bg-gray-900 p-3 rounded">
              {data?.code}
            </pre>
          ) : null}
          <ul>
            {data?.options.map((option, i) => (
              <li
                key={i}
                className={`px-3 rounded ${
                  data.correctOptionIndex === i ? "bg-green-400" : ""
                }`}
              >
                {i + 1}. {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SolvedQuestions;
