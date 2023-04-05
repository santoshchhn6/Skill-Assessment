import { useNavigate } from "react-router-dom";
import { SovedQuestionType } from "../types";
type Props = {
  correctAnswer: number;
  correctAnswersNeedsToPass: number;
  solvedQuestions: SovedQuestionType[];
};
const Result = ({
  correctAnswer,
  correctAnswersNeedsToPass,
  solvedQuestions,
}: Props) => {
  const navigate = useNavigate();

  console.log({ solvedQuestions });
  return (
    <div className="m-3 text-center text-2xl">
      <p>Result</p>
      <p className="my-5">Correct Answer : {correctAnswer}</p>

      {correctAnswer >= correctAnswersNeedsToPass ? (
        <p className="text-green-600 font-bold">Passed</p>
      ) : (
        <p className="text-red-600 font-bold">Failed</p>
      )}
      <button
        className="bg-gray-400 p-1 px-2 rounded m-3 hover:bg-gray-300 text-gray-700"
        onClick={() => navigate("/")}
      >
        Goto Home
      </button>
      <button
        className="bg-gray-400 p-1 px-2 rounded m-3 hover:bg-gray-300 text-gray-700"
        onClick={() =>
          navigate("/user_solved_questions", { state: solvedQuestions })
        }
      >
        View Your Answers
      </button>
    </div>
  );
};

export default Result;
