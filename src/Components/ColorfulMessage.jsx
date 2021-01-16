import React from "react";

// #メッセージをコンポーネント化。
// #引数で取得した値をcssに割り当てる。
const ColorfulMessage = (props) => {
  // #分割代入で取得した値を変数化する。
  const { color, message } = props;

  // #cssをオブジェクトとして定義する。
  // #プロパティは全てキャメルケースに変更する。
  const contentStyle = {
    // color: "blue",
    // color: props.color,
    // #分割代入によってpropsを省略。
    // color: color,
    // #プロパティと変数名が同一の場合は省略可能。
    color,
    fontSize: "18px",
    opacity: 0.5
  };
  // #pタグ内のテキストをchildrenで取得する場合。
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
