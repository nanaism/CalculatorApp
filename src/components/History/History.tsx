import React from "react";
import style from "./History.module.css";

type HistoryProps = {
  label: string;
  onClick: () => void;
};

const History: React.FC<HistoryProps> = ({ onClick, label }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default History;
