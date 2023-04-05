import { QuestionType } from "../types";

type Props = {
  data: QuestionType | undefined;
  selectedRadio: number | null;
  setSelectedRadio(i: number): void;
};
const SingleQuestion = ({ data, selectedRadio, setSelectedRadio }: Props) => {
  return (
    <div className="m-3">
      <h3 className="font-bold mb-3">Q.{data?.question}</h3>
      {data?.code ? (
        <pre className="text-green-400 mb-3 bg-gray-900 p-3">{data?.code}</pre>
      ) : null}
      <ul>
        {data?.options.map((option, i) => (
          <li key={i}>
            <input
              type="radio"
              name="option"
              value={i}
              onChange={() => setSelectedRadio(i)}
              checked={selectedRadio === i}
              className="mr-3"
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleQuestion;
