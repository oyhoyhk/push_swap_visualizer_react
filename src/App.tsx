import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import Generator from "./components/Generator";
import ReadFile from "./components/ReadFile";
import Visualizer from "./components/Visualizer";

const App = () => {
  const [count, setCount] = useState(500);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.currentTarget.value))) {
      setCount(500);
      return;
    }
    setCount(Number(e.currentTarget.value));
  };
  return (
    <Container>
      <Header>Push Swap Visualizer</Header>
      <Generator count={count} handleInputChange={handleInputChange} />
      <ReadFile />
      <Visualizer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 2.5rem;
`;

export default App;
