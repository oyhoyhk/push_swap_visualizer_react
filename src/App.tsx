import styled from "@emotion/styled";
import * as React from "react";
import { useState, useRef } from "react";
import Generator from "./components/Generator";
import ReadFile from "./components/ReadFile";
import Visualizer from "./components/Visualizer";
import { commands, createRandomNumber, doOperation } from "./funcs";

const CONTAINER_WIDTH = 900;
const CONTAINER_HEIGHT = 750;
const STACK_WIDTH = 350;

const COUNT = 500;

const App = () => {
  const [count, setCount] = useState(COUNT);
  const [stackA, setStackA] = useState<number[]>([]);
  const [stackB, setStackB] = useState<number[]>([]);
  const [playing, setPlaying] = useState(false);
  const raqId = useRef(-1);
  const cmdIdx = useRef(0);
  const [speed, setSpeed] = useState(1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.currentTarget.value))) {
      setCount(COUNT);
      return;
    }
    setCount(Number(e.currentTarget.value));
  };
  React.useEffect(() => {
    setStackA(createRandomNumber(COUNT).split(" ").reverse().map(Number));
  }, []);

  React.useEffect(() => {
    if (playing) {
      raqId.current = setTimeout(() => {
        doOperation(commands[cmdIdx.current], stackA, stackB);
        cmdIdx.current++;
        setStackA([...stackA]);
        setStackB([...stackB]);
        if (cmdIdx.current === commands.length) {
          setPlaying(false);
          clearTimeout(raqId.current);
        }
      }, speed);
    }

    return () => {
      clearTimeout(raqId.current);
    };
  }, [playing, stackA, stackB, cmdIdx]);
  const clickStart = () => {
    setPlaying(true);
    if (cmdIdx.current === commands.length) {
      setStackA(createRandomNumber(COUNT).split(" ").reverse().map(Number));
      cmdIdx.current = 0;
    }
  };
  const clickEnd = () => {
    setPlaying(false);
  };

  const changeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value));
  };

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
        clickStart={clickStart}
        clickEnd={clickEnd}
        count={count}
        cmdCount={commands.length}
        commands={commands}
        cur={cmdIdx.current}
        second={speed}
        changeSpeed={changeSpeed}
        speed={speed}
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
