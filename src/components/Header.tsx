import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <h2
      className="text-center font-bold p-3 bg-gray-200 text-gray-700 border-b-2 border-gray-600"
      onClick={() => navigate("/")}
    >
      Skill Assessment
    </h2>
  );
};

export default Header;
