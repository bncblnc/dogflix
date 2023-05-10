import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <>
      <GlobalStyle />
      <Title>AluraFlix</Title>;
    </>
  );
}

export default App;
