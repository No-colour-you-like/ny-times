import React from "react";

const Button = ({ children, className }) => {
  return <button className={`button-common ${className}`}>{children}</button>;
};

export default Button;
