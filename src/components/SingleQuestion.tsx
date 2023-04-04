import React, { useEffect, useState } from "react";
import { QuestionType } from "../types";

type Props = {
  data: QuestionType | undefined;
  selectedRadio: number | null;
  setSelectedRadio(i: number): void;
};
const SingleQuestion = ({ data, selectedRadio, setSelectedRadio }: Props) => {
  // const handleOnChange=(e:React.ChangeEventHandler<HTMLInputElement>)=>{
  //   setSelectedRadio()
  // }
  return (
    <div>
      <h3 className="font-bold mb-3">Q.{data?.question}</h3>
      {data?.code ? (
        <pre className="text-red-400 mb-3">{data?.code}</pre>
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
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleQuestion;
