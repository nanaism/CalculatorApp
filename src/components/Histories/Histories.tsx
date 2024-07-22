import React from "react";
import History from "../History/History";
import style from "./Histories.module.css";

// 計算式の履歴1個
type HistoryItem = {
  input: string;
  result: number | string;
};

type HistoriesProps = {
  history: HistoryItem[];
  restoreFromHistory: (index: number) => void;
};

const Histories: React.FC<HistoriesProps> = ({
  history,
  restoreFromHistory,
}) => {
  return (
    <div className={style.history}>
      <h2>計算履歴</h2>
      <h4>履歴クリックで計算式を復元できます</h4>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <History
              onClick={() => restoreFromHistory(index)}
              label={`${item.input} = ${item.result}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Histories;
