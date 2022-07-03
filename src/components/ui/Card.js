import React from "react";
import styled from "styled-components";

function Card(props) {
  return <CardDiv>{props.children}</CardDiv>;
}

export default Card;

const CardDiv = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;
