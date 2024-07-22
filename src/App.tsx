import React, { useState } from "react";
import style from "./App.module.css";
import Calculator from "./components/Calculator/Calculator";
import Histories from "./components/Histories/Histories";

// 計算機の状態(復元のため)
type CalculatorState = {
  input: string;
  result: number | string;
  memory: number;
  hasMemory: boolean;
};

// 計算履歴
type HistoryItem = {
  input: string;
  result: number | string;
};

const App: React.FC = () => {
  // 計算機の状態(復元のため)
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    input: "",
    result: "",
    memory: 0,
    hasMemory: false,
  });
  // 計算履歴
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // 計算機の状態を上書き
  const updateState = (newState: Partial<CalculatorState>): void => {
    setCalculatorState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  // 履歴に追加
  const addToHistory = (input: string, result: number | string): void => {
    setHistory((prevHistory) => [...prevHistory, { input, result }]);
  };

  // 履歴から計算式と結果を復元
  const restoreFromHistory = (index: number): void => {
    const historicalItem = history[index];
    setCalculatorState((prevState) => ({
      ...prevState,
      input: historicalItem.input,
      result: historicalItem.result,
    }));
  };

  return (
    <div className={style.App}>
      <Calculator
        state={calculatorState}
        updateState={updateState}
        addToHistory={addToHistory}
      />
      <Histories history={history} restoreFromHistory={restoreFromHistory} />
    </div>
  );
};

export default App;
