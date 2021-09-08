import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import api from "../services/api";

function RouteWrapper({
  redirectTo,
  isPrivate,
  component: Component,
  ...rest
}) {
  let token = localStorage.getItem("@formulaone:JWT_TOKEN");
  let refreshToken = localStorage.getItem("@formulaone:refreshToken");
  try{
  api.post("/auth", token, {headers: {'x-access-token': `${refreshToken}`}})
  .then((response) => {
    let token = response.data.token;
    let refreshToken = response.data.refreshToken;
    localStorage.setItem("@formulaone:JWT_TOKEN", token);
    localStorage.setItem("@formulaone:refreshToken", refreshToken);
   })}
   catch(err) {
   token = false;
   console.log(err)
   }
   

  if (!token && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: "/",
  isPrivate: false,
};

export default RouteWrapper;
