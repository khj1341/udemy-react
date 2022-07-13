import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = ({ isShow }) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{isShow ? "This is new!" : ""}</MyParagraph>;
};

// React.memo 로 감싸주면 부모 Component에 변화가 있더라도 props 의 변경이 있을 때만 해당 component를 재평가/재실행 한다.
// 모든 Component에 React.memo를 적용하지 않는 이유는 Resource를 잡아먹기 때문.(기존 props와 새로운 props를 비교하는 프로세스가 생기기 때문)
// Component Tree에서 자식 Component가 많으면 유용하게 쓰임.(따라서 상위 Component일수록 더 효과적임, App Component에 가까울수록.)
// 부모 Component가 재평가 될때마다 자식 Component가 바뀌는 경우는 의미없음.
export default React.memo(DemoOutput);
