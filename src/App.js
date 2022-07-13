import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

// useCallback, useMemo는 React.memo와 함께 사용하면 좋음.
// useMemo는 .sort 같은 것을 사용할때 성능이 문제될것 같으면 사용.
const App = () => {
  const [isShowParagraph, setIsShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  // 매번 재생성됨. => 새로운 함수!
  // const toggleParagraphHandler = () => {
  //   setIsShowParagraph((prevIsShowParagraph) => !prevIsShowParagraph);
  // };

  // 기존의 reference에 저장해줌 => 새로운 함수가 아님. (React 자체에 저장됨.)
  // useCallback은 1. 함수를 메모리에 고정시켜줌 2. 클로저에 의해서 함수 선언할 때 state까지 기억하게됨.
  const toggleParagraphHandler = useCallback(() => {
    // 함수가 생성될때, 함수 외부에서 사용하는 모든 변수를 잠가버린다. 따라서 allowToggle도 잠긴다.
    // ===> 그래서 deps에 allowToggle을 넣어서 allowToggle이 바뀔때마다 함수를 재생성해줘야함.
    if (allowToggle) {
      setIsShowParagraph((prevIsShowParagraph) => !prevIsShowParagraph);
    }
    // deps에 setState함수 넣어주지 않는 이유도 useCallback함수로 setState함수가 만들어지기 때문.
    // deps에 state를 넣어줌으로써 allowToggle이 바뀔때마다 함수가 재생성되므로 새로운 allowToggle값을 항상 사용하게됨.
  }, [allowToggle]);

  // 클로저: 함수가 생성될때 외부 변수까지 그대로 기억해서 외부 변수가 변하더라도 기존의 변수값을 기억한다.

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  console.log("APP RUNNING");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput isShow={isShowParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;
