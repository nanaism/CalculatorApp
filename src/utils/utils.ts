// 「M+」: メモリに加算
export const handleMemoryPlus = (
  input: string,
  result: number | string,
  memory: number
): number => {
  // 計算途中でM+が押された場合を想定
  const calculatedInput: string | number = calculate(input);
  // もし=が押されてある(計算がもう終わっている状態)なら
  if (typeof result === "number") {
    return memory + result;
  }
  // 計算が終わっていない状態かつ計算が正常なら
  if (typeof calculatedInput === "number") {
    return memory + calculatedInput;
  }
  // それ以外(エラー)ならエラーのまま
  return memory;
};

// 「M-」: メモリから減算
export const handleMemoryMinus = (
  input: string,
  result: number | string,
  memory: number
): number => {
  // 計算途中でM-が押された場合を想定
  const calculatedInput: string | number = calculate(input);
  // もし=が押されてある(計算がもう終わっている状態)なら
  if (typeof result === "number") {
    return memory - result;
  }
  // 計算が終わっていない状態かつ計算が正常なら
  if (typeof calculatedInput === "number") {
    return memory - calculatedInput;
  }
  // それ以外(エラー)ならエラーのまま
  return memory;
};

// 「=」: 文字列から計算
export const calculate = (input: string): number | string => {
  if (input === "") {
    return 0;
  }
  try {
    const evalResult: number = eval(input);
    if (evalResult === Infinity || isNaN(evalResult)) {
      throw new Error("Invalid operation");
    }
    return evalResult;
  } catch {
    return "Error";
  }
};
