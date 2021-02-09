import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import "./Header.css";

const Header = () => {
  const token = useSelector((state) => state.token);

  return (
    <ul className="header__list">
      {token ? (
        <UserMenu />
      ) : (
        <>
          <Link to="/login" className="header__item">
            Login
          </Link>
          <Link to="/registration" className="header__item">
            Register
          </Link>
        </>
      )}
    </ul>
  );
};

export default Header;
