import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/operation/authOperation";
import { getUserName } from "../../redux/selectors/authSelector";

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Csmile_alt.svg/1200px-Csmile_alt.svg.png"
        alt="avatar-icon"
        width="32"
      />
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
