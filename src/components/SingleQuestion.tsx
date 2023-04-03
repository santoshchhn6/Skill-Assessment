import { QuestionType } from "../types";

type Props = {
  data: QuestionType | undefined;
  setOption(i: number): void;
};
const SingleQuestion = ({ data, setOption }: Props) => {
  const handleOptionChange = (i: number) => {
    setOption(i);
  };
  return (
    <div>
      <h3 className="font-bold mb-3">Q.{data?.question}</h3>
      <pre className="text-red-400 mb-3">{data?.code}</pre>
      <ul>
        {data?.options.map((option, i) => (
          <li key={i}>
            <input
              type="radio"
              name="option"
              onChange={() => handleOptionChange(i)}
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleQuestion;
