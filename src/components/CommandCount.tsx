import {useEffect, useRef} from "react";

const CommandCount = ({cur, cmdCount} : {cur:number, cmdCount :number}) => {
    const canvas = useRef<HTMLCanvasElement | null>(null);
    useEffect(()=>{
        if (!canvas) return;
        const ctx = canvas.current?.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, 150, 50);
        ctx.font = "25px Oswald";
        ctx.fillStyle='white';
        ctx.fillText(cur.toString(),15,37);
        ctx.fillText("/",  70, 37);
        ctx.fillText(cmdCount.toString(), 100, 37);
    },[cur])
    return <canvas style={{ display:'inline-block'}} ref={canvas} width={150} height={50}/>
}

export default CommandCount
