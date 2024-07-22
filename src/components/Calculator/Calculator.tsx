import React from "react";
import {
  calculate,
  handleMemoryMinus,
  handleMemoryPlus,
} from "../../utils/utils";
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import style from "./Calculator.module.css";

type CalculatorProps = {
  state: {
    input: string;
    result: number | string;
    memory: number;
    hasMemory: boolean;
  };
  updateState: (newState: Partial<CalculatorProps["state"]>) => void;
  addToHistory: (input: string, result: number | string) => void;
};

const Calculator: React.FC<CalculatorProps> = ({
  state,
  updateState,
  addToHistory,
}) => {
  const { input, result, memory, hasMemory } = state;

  // 入力文字をinputに加算していく
  const handleInput = (value: string): void => {
    updateState({ input: input + value });
  };

  // 「M+」
  const handleMemoryPlusClick = (): void => {
    const newMemory = handleMemoryPlus(input, result, memory);
    updateState({ memory: newMemory, hasMemory: true });
  };

  // 「M-」
  const handleMemoryMinusClick = (): void => {
    const newMemory = handleMemoryMinus(input, result, memory);
    updateState({ memory: newMemory, hasMemory: true });
  };

  // 「MR」
  const handleMemoryRecall = (): void => {
    updateState({ result: memory });
  };

  // 「MC」
  const handleMemoryClear = (): void => {
    updateState({ memory: 0, hasMemory: false });
  };

  // 「CA」
  const clear = (): void => {
    updateState({ input: "", result: "", memory: 0, hasMemory: false });
  };

  // 「=」
  const handleCalculate = (): void => {
    const calculationResult = calculate(input);
    updateState({ result: calculationResult, input: "" });
    addToHistory(input, calculationResult);
  };

  return (
    <div className={style.calculator}>
      <Display input={input} result={result} hasMemory={hasMemory} />
      <Buttons
        handleInput={handleInput}
        calculate={handleCalculate}
        clear={clear}
        handleMemoryPlus={handleMemoryPlusClick}
        handleMemoryMinus={handleMemoryMinusClick}
        handleMemoryRecall={handleMemoryRecall}
        handleMemoryClear={handleMemoryClear}
      />
    </div>
  );
};

export default Calculator;
