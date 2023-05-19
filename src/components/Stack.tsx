import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { colorChange } from "../funcs";

const Stack = ({ stack, count }: { stack: number[]; count: number }) => {
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
    const HEIGHT = Math.floor(TOTAL_HEIGHT / count);
    if (conRef.current) {
      ctx.clearRect(
        0,
        0,
        conRef.current.getBoundingClientRect().width,
        conRef.current.getBoundingClientRect().height
      );
    }
    ctx.beginPath();
    const start = [255, 0, 0];
    const end = [255, 255, 0];
    for (let i = 0; i < stack.length; i++) {
      const width = Math.round((stack[i] / count) * TOTAL_WIDTH * 0.95);
      const color = colorChange(start, end, stack[i], count);
      ctx.fillStyle = color;
      ctx.fillRect(0, TOTAL_HEIGHT - HEIGHT * (i + 1), width + 2, HEIGHT);
    }
  }, [count, stack]);
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

const Canvas = styled.canvas``;

const StackContainer = styled.div`
  width: 37%;
  height: 100%;
`;

export default Stack;
