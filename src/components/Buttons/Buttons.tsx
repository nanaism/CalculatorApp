import React from "react";
import Button from "../Button/Button";
import style from "./Buttons.module.css";

type ButtonProps = {
  handleInput: (input: string) => void;
  calculate: () => void;
  clear: () => void;
  handleMemoryPlus: () => void;
  handleMemoryMinus: () => void;
  handleMemoryRecall: () => void;
  handleMemoryClear: () => void;
};

const Buttons: React.FC<ButtonProps> = ({
  handleInput,
  calculate,
  clear,
  handleMemoryPlus,
  handleMemoryMinus,
  handleMemoryRecall,
  handleMemoryClear,
}) => {
  return (
    <div className={style.buttons}>
      <Button label="7" onClick={() => handleInput("7")} />
      <Button label="8" onClick={() => handleInput("8")} />
      <Button label="9" onClick={() => handleInput("9")} />
      <Button label="/" onClick={() => handleInput("/")} />
      <Button label="MC" onClick={handleMemoryClear} />

      <Button label="4" onClick={() => handleInput("4")} />
      <Button label="5" onClick={() => handleInput("5")} />
      <Button label="6" onClick={() => handleInput("6")} />
      <Button label="*" onClick={() => handleInput("*")} />
      <Button label="MR" onClick={handleMemoryRecall} />

      <Button label="1" onClick={() => handleInput("1")} />
      <Button label="2" onClick={() => handleInput("2")} />
      <Button label="3" onClick={() => handleInput("3")} />
      <Button label="-" onClick={() => handleInput("-")} />
      <Button label="M-" onClick={handleMemoryMinus} />

      <Button label="0" onClick={() => handleInput("0")} />
      <Button label="CA" onClick={clear} />
      <Button label="=" onClick={calculate} />
      <Button label="+" onClick={() => handleInput("+")} />
      <Button label="M+" onClick={handleMemoryPlus} />
    </div>
  );
};

export default Buttons;
