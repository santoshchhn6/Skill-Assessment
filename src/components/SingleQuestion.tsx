import { useEffect, useState } from "react";
import { QuestionType } from "../types";

type Props = {
  data: QuestionType | undefined;
  setOption(i: number): void;
  onNextClick(): void;
};
const SingleQuestion = ({ data, setOption, onNextClick }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);

  useEffect(() => {
    setSelectedRadio(null);
  }, [onNextClick]);
  const isSelected = (i: number): boolean => selectedRadio === i;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let index = parseInt(e.target.value);
    setSelectedRadio(index);
    setOption(index);
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
              value={i}
              checked={isSelected(i)}
              onChange={handleOptionChange}
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleQuestion;
