import React from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../redux/selectors/authSelector";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "./navigation/Navigation";

const Header = () => {
  const isAuthenticated = useSelector(isLogin);
  return (
    <>
      <Navigation />
      {isAuthenticated && <UserMenu />}
    </>
  );
};

export default Header;
