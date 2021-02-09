import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserOperation } from "../../redux/operation/userOperation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const userEmail = useSelector((state) => state.userEmail);

  const logOutHandler = () => {
    dispatch(logoutUserOperation(token));
  };

  return (
    <>
      <p className="header__email">{userEmail}</p>
      <p onClick={logOutHandler} className="header__item">
        Logout
      </p>
    </>
  );
};

export default UserMenu;
