import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="Heading">
        Skill Assessment
      </Link>
    </header>
  );
};

export default Header;
