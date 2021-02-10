import { lazy } from "react";

const phonebookRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../pages/homePage/HomePage" /* webpackChunkName: "HomePage"*/)
    ),
    isPrivate: false,
    restricted: false,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    component: lazy(() =>
      import("../pages/loginPage/LoginPage" /* webpackChunkName: "LoginPage"*/)
    ),
    isPrivate: false,
    restricted: true,
  },
  {
    path: "/register",
    name: "Sign Up",
    exact: true,
    component: lazy(() =>
      import(
        "../pages/registerPage/RegisterPage" /* webpackChunkName: "RegisterPage"*/
      )
    ),
    isPrivate: false,
    restricted: true,
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: true,
    component: lazy(() =>
      import(
        "../pages/contactsPage/ContactsPage" /* webpackChunkName: "ContactsPage"*/
      )
    ),
    isPrivate: true,
    restricted: false,
  },
];

export default phonebookRoutes;
