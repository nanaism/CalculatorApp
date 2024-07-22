import React from "react";
import style from "./Display.module.css";

type DisplayProps = {
  input: string | null;
  result: string | number;
  hasMemory: boolean;
};

const Display: React.FC<DisplayProps> = ({ input, result, hasMemory }) => {
  let displayValue: string | number = "";

  // 基本は(input || result)。resultがエラーメッセージの場合を考慮。
  if (input !== null && input !== "") {
    displayValue = input;
  } else if (
    typeof result === "string" &&
    (result === "Error" || result === "Invalid operation")
  ) {
    displayValue = result;
  } else {
    displayValue = result;
  }

  return (
    <div className={style.display}>
      <div className={style.mMark}>{hasMemory ? "M" : ""}</div>
      <div className={style.calculatorScreen}>
        <div className={style.value}>{displayValue}</div>
      </div>
    </div>
  );
};

export default Display;
