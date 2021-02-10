import React from "react";
import NavigationLink from "./NavigationLink";

const NavigationListItem = ({
  isAuth,
  isPrivate,
  restricted,
  ...routeProps
}) => (
  <>
    {!isPrivate && !restricted && <NavigationLink {...routeProps} />}

    {isAuth && isPrivate && !restricted && <NavigationLink {...routeProps} />}

    {!isAuth && !isPrivate && restricted && <NavigationLink {...routeProps} />}
  </>
);

export default NavigationListItem;
