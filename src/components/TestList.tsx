import react from "../assets/reactjs.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import { useNavigate } from "react-router-dom";
import { lazy } from "react";
import ReactQuestions from "../data/React.json";
import JavaScriptQuestions from "../data/JavaScript.json";
import CSSQuestions from "../data/CSS.json";

const TestList = () => {
  const navigate = useNavigate();
  const buttons = [
    {
      title: "React",
      img: react,
    },
    {
      title: "JavaScript",
      img: javascript,
    },
    {
      title: "CSS",
      img: css,
    },
  ];

  const handleNavigation = async (title: string) => {
    let data = null;
    if (title === "React") data = ReactQuestions;
    else if (title === "JavaScript") data = JavaScriptQuestions;
    else if (title === "CSS") data = CSSQuestions;

    navigate("/Test", { state: data });
  };
  return (
    <div>
      <h2 className="text-center font-bold p-3 bg-gray-200 text-gray-700 border-b-2 border-gray-600">
        Skill Assessment
      </h2>
      <div className="flex justify-center gap-3 mt-10">
        {buttons.map((e, i) => (
          <div
            key={i}
            className="text-center cursor-pointer font-bold"
            onClick={() => handleNavigation(e.title)}
          >
            <img
              src={e.img}
              alt=""
              className="w-[100px] aspect-square object-contain ease-in-out duration-300 hover:scale-105 active:scale-95"
            />
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestList;
