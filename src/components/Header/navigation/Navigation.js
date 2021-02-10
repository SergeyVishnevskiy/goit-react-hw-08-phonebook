import React from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../../redux/selectors/authSelector";
import phonebookRoutes from "../../../routes/phonebookRoutes";
import NavigationListItem from "./NavigationListItem";
// import {styles} from

const Navigation = () => {
  const isAuthenticated = useSelector(isLogin);
  return (
    <>
      {phonebookRoutes.map((route) => (
        <NavigationListItem
          {...route}
          isAuth={isAuthenticated}
          key={route.path}
        />
      ))}
    </>
  );
};

export default Navigation;
