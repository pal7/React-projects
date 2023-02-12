import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/courses" className="header__link">
            Courses
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/enquiries" className="header__link">
            Enquiries
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
