# 状態管理の流れ

- ユーザーが計算機で操作を行う
- Calculator コンポーネントがその操作を処理
- 必要に応じて App コンポーネントの updateState 関数を呼び出して状態を更新
- 計算結果が出たら addToHistory 関数を呼び出して履歴に追加
- 更新された状態が History コンポーネントに反映される
- ユーザーが履歴項目をクリックすると、History コンポーネントが restoreFromHistory 関数を呼び出し、その状態が復元される
