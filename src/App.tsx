import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import Generator from "./components/Generator";
import ReadFile from "./components/ReadFile";
import Visualizer from "./components/Visualizer";
import { createRandomNumber } from "./funcs";

const CONTAINER_WIDTH = 900;
const CONTAINER_HEIGHT = 750;
const STACK_WIDTH = 350;

const COUNT = 500;

const App = () => {
  const [count, setCount] = useState(COUNT);
  const [stackA, setStackA] = useState<number[]>([]);
  const [stackB, setStackB] = useState<number[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.currentTarget.value))) {
      setCount(COUNT);
      return;
    }
    setCount(Number(e.currentTarget.value));
  };

  React.useEffect(() => {
    setStackA(createRandomNumber(COUNT).split(" ").map(Number));
  }, []);

  return (
    <Container>
      <Header>Push Swap Visualizer</Header>
      <Generator count={count} handleInputChange={handleInputChange} />
      <ReadFile />
      <Visualizer
        height={CONTAINER_HEIGHT}
        totalWidth={CONTAINER_WIDTH}
        width={STACK_WIDTH}
        stackA={stackA}
        stackB={stackB}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
`;

const Header = styled.div`
  font-size: 2.5rem;
  margin: 0 auto;
  text-align: center;
  margin: 50px;
`;

export default App;
