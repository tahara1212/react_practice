// Reactを読み込み（React17以降、JSXの使用のみなら省略可能）
import React from "react";
import ReactDOM from "react-dom";
// エクスポートされたファイルを読み込み
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
