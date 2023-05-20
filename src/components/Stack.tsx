import styled from "@emotion/styled";
import {useEffect, useRef} from "react";
import {colorChange} from "../funcs";


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
      ctx.fillStyle = colorChange(start, end, stack[i], count);
      ctx.fillRect(0, TOTAL_HEIGHT - HEIGHT * (i + 1), width + 2, HEIGHT);
    }
  }, [canvas, count, stack, conRef]);
  return (
    <StackContainer ref={conRef}>
      <canvas
        ref={canvas}
        width={
          340
        }
        height={
          530
        }
      />
    </StackContainer>
  );
};


const StackContainer = styled.div`
  width: 340px;
  height: 530px;
`;

export default Stack;
