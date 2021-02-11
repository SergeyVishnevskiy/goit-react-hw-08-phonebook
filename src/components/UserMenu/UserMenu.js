import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operation/authOperation";
// import { getUserName } from "../../redux/selectors/authSelector";

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Csmile_alt.svg/1200px-Csmile_alt.svg.png"
        alt="avatar-icon"
        width="32"
      />
      <span>Welcome</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
