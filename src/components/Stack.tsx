import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { colorChange } from "../funcs";

const Stack = ({ stack }: { stack: number[] }) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const conRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!canvas.current) return;
    const ctx = canvas.current.getContext("2d");
    if (!ctx) return;
    const TOTAL_WIDTH = Math.floor(
      canvas.current.getBoundingClientRect().width
    );
    const TOTAL_HEIGHT = Math.floor(
      canvas.current.getBoundingClientRect().height
    );
    const HEIGHT = Math.floor(TOTAL_HEIGHT / stack.length);

    ctx.beginPath();
    const start = [255, 0, 0];
    const end = [0, 0, 255];
    for (let i = 0; i < stack.length; i++) {
      const width = Math.floor((stack[i] / stack.length) * TOTAL_WIDTH * 0.95);
      const color = colorChange(start, end, stack[i], stack.length);
      ctx.fillStyle = color;
      ctx.fillRect(0, TOTAL_HEIGHT - HEIGHT * (i + 1), width + 2, HEIGHT);
    }
  }, [stack]);
  return (
    <StackContainer ref={conRef}>
      <Canvas
        ref={canvas}
        width={
          conRef.current
            ? conRef.current.getBoundingClientRect().width + "px"
            : "100%"
        }
        height={
          conRef.current
            ? conRef.current.getBoundingClientRect().height + "px"
            : "100%"
        }
      />
    </StackContainer>
  );
};

const Canvas = styled.canvas`
  background: black;
`;

const StackContainer = styled.div`
  width: 47%;
  height: 100%;
`;

export default Stack;
