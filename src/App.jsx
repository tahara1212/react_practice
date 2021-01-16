import React, { useEffect, useState } from "react";
// #default exportではない場合は、分割代入で受け取る。
// #default exportで受け取る場合は、単なる変数宣言となる為、ファイル名が異なっていた場合も処理は行われる。
import { ColorfulMessage } from "./Components/ColorfulMessage";

const App = () => {
  // #コンポーネント内で動的に値が切り替わる場合は、stateを使用する。
  // #useStateから配列の分割代入で取り出す。
  // #一つ目にstateとして使用する変数、二つ目にそれを更新する関数を定義。
  // #useStateの括弧内に初期値を設定。
  const [num, setnum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);
  // #カウントアップボタン
  const onClickCountUp = () => {
    // #stateの更新。
    setnum(num + 1);
  };
  // #表示、非表示ボタン
  const onClickFaceShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  // #stateが更新されると再レンダリングが発生し、意図しない処理が呼ばれる可能性がある。
  // #レンダリング時に参照する値を決定し、その値に依存する処理を記述する。
  // #設定した値が変動しない限り、useEffectの中の処理は実行されない。
  useEffect(() => {
    // #カウントアップが3の倍数の時のみ表示する。
    if (num % 3 === 0) {
      // #パイプラインは左がfalseの場合に右を実行する。
      // #左がtrueの場合、右の処理は実行されない。
      faceShowFlg || setFaceShowFlg(true);
    } else {
      // #アンパサンドは左がtrueの場合に右を実行する。
      // #右がfalseの場合、左の処理は実行されない。
      faceShowFlg && setFaceShowFlg(false);
    }
    // #第二引数に配列を設定し、参照する値を決定する。
    // #空の配列を渡すと、最初の一回のみ実行する。
    // #useEffect内で使用している変数がuseEffect内で定義されていない場合、eslintが警告を発する。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
      <button onClick={onClickCountUp}>Count Up!</button>
      <p>{num}</p>
      <button onClick={onClickFaceShowFlg}>on/off</button>
      {faceShowFlg && <p>（＾ω＾）</p>}
    </>
  );
};

// ファイルをエクスポートして共通化
export default App;
