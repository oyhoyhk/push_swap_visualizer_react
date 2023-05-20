import styled from "@emotion/styled";
import * as React from "react";
import {useState, useRef, useEffect} from "react";
import Generator from "./components/Generator";
import ReadFile from "./components/ReadFile";
import Visualizer from "./components/Visualizer";
import { createRandomNumber, doOperation, doReverseOperation} from "./funcs";

const CONTAINER_WIDTH = 900;
const CONTAINER_HEIGHT = 750;
const STACK_WIDTH = 350;

const COUNT = 500;

const App = () => {
    const [count, setCount] = useState(COUNT);
    const [origin, setOrigin] = useState<number[]>([]);
    const [stackA, setStackA] = useState<number[]>([]);
    const [stackB, setStackB] = useState<number[]>([]);
    const [playing, setPlaying] = useState(false);
    const raqId = useRef(-1);
    const [cmdIdx, setCmdIdx] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [commands, setCommands] = useState<string[]>([]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.currentTarget.value))) {
            return;
        }
        setCount(Number(e.currentTarget.value));
    };

    React.useEffect(() => {
        if (playing) {
            raqId.current = setTimeout(() => {
                doOperation(commands[cmdIdx], stackA, stackB);
                setCmdIdx(cmdIdx + 1)
                setStackA([...stackA]);
                setStackB([...stackB]);
                if (cmdIdx === commands.length-1) {
                    setPlaying(false);
                    clearTimeout(raqId.current);
                }
            }, speed);
        }

        return () => {
            clearTimeout(raqId.current);
        };
    }, [commands, speed, playing, stackA, stackB, cmdIdx]);
    const handlePlaying = () => {
        setPlaying(!playing);
        if (cmdIdx === commands.length) {
            setStackA(createRandomNumber(COUNT).split(" ").reverse().map(Number));
            setCmdIdx(0);
        }
    };

    const clickReset = () => {
        setPlaying(false);
        setCmdIdx((0));
        setStackB([]);
        setStackA([...origin]);
    }
    const changeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpeed(Number(e.target.value));
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'a' || e.key === 'A') {
                // 뒤로
                if (playing) setPlaying(false);
                if (cmdIdx > 0) {
                    doReverseOperation(commands[cmdIdx - 1], stackA, stackB);
                    setStackA([...stackA]);
                    setStackB([...stackB]);
                    setCmdIdx(cmdIdx - 1);
                }
            } else if (e.key === 'd' || e.key === 'D') {
                // 앞으로
                if (playing) setPlaying(false);
                if (cmdIdx < commands.length) {
                    doOperation(commands[cmdIdx], stackA, stackB);
                    setStackA([...stackA]);
                    setStackB([...stackB]);
                    setCmdIdx(cmdIdx + 1);
                }
            } else if (e.key === 'w' || e.key === 'W') {
                // 속도 빠르게
                if (speed < 200) setSpeed(speed + 1);
            } else if (e.key === 's' || e.key === 'S') {
                // 속도 느리게
                if (speed > 1) setSpeed(speed - 1);
            } else if (e.key === ' ') {
                // playing, stop
                setPlaying(!playing);
            } else if (e.key === 'r' || e.key === 'R') {
                setPlaying(false);
                setCmdIdx((0));
                setStackB([]);
                setStackA([...origin]);
            }
        }
        document.body.addEventListener('keypress', handleKeyPress);

        return () => {
            document.body.removeEventListener('keypress', handleKeyPress);
        }
    })

    return (
        <Container>
            <Header>Push Swap Visualizer</Header>
            <Generator count={count} handleInputChange={handleInputChange} setStack={setStackA} setOrigin={setOrigin}/>
            <ReadFile setCommands={setCommands}/>
            {stackA.length + stackB.length > 0 && commands.length > 0 && <Visualizer
                height={CONTAINER_HEIGHT}
                totalWidth={CONTAINER_WIDTH}
                width={STACK_WIDTH}
                stackA={stackA}
                stackB={stackB}
                handlePlaying={handlePlaying}
                count={count}
                cmdCount={commands.length}
                commands={commands}
                cur={cmdIdx}
                second={speed}
                changeSpeed={changeSpeed}
                speed={speed}
                playing={playing}
                clickReset={clickReset}
            />}
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
  text-align: center;
  margin: 50px;
`;

export default App;
