import React from "react";
import "./Alert.css";

const Alert = ({ showAlert }) => {
  return <div className="alert">{showAlert}</div>;
};

export default Alert;
