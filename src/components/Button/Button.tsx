import React from "react";
import style from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
