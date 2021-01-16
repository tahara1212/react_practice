import React from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    // #JSX記法は一つのタグで囲わないとエラーになる。
    // <div>
    //   <h1>Hello</h1>
    //   <p>world</p>
    // </div>

    // #React.Fragmentで不要なタグのレンダリングを回避。
    // <React.Fragment>
    //   <h1>Hello</h1>
    // </React.Fragment>

    // #React.Fragmentは省略可能。
    // #HTMLに直接styleを記述する場合は波括弧で囲う。
    // #イベント名称はキャメルケースで記述する。
    // #propsを使用する場合はコンポーネント名のタグ内で指定する。
    // #コンポーネントのタグで囲った文字列はchildrenで取得する。
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="black" message="Hello" />
      <ColorfulMessage color="red" message="idol" />
      <ColorfulMessage color="red">konnichiha</ColorfulMessage>
      <button onClick={onClickButton}>判定</button>
    </>
  );
};

// ファイルをエクスポートして共通化
export default App;
