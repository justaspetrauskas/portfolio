import React, { useEffect, useRef, useState } from "react";
import classes from "./greetingCanvas.module.css";

import Ring from "./Ring";

function easeInQuad(x: number) {
  return x * x;
}

const configs = {
  numberOfRings: 8,
  gapCircle: 15,
  waveOffset: 5,
  radius: 150,
};

interface CanvasSize {
  width: number | null;
  height: number | null;
}

interface CanvasProps {
  fps?: number;
}

const Canvas = ({ fps = 30 }: CanvasProps) => {
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (parentContainerRef.current && canvasRef.current) {
      const context = canvasRef.current?.getContext("2d");
      setContext(context);
      resizeCanvas(context!);
    }
  }, []);

  const resizeCanvas = (context: CanvasRenderingContext2D) => {
    const canvas = context.canvas;
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      canvas.width = width * ratio;
      canvas.height = height * ratio;

      context.scale(ratio, ratio);
      setCanvasSize({ width: canvas.width, height: canvas.height });
      return true;
    }
    return false;
  };

  useEffect(() => {
    let frameCount = 0;
    let startAngle = 0;
    let gapCircle = 4;
    let gapDot = 4;
    let dotRadius = 150;
    let circleRadius = 0;
    const fitRadius = dotRadius;
    let waveAmplitude = Math.floor(Math.random() * 15);
    let animationFrameId: number,
      fpsInterval: number,
      now: number,
      then: number,
      elapsed: number;

    // Check if null context has been replaced on component mount
    if (context) {
      const render = () => {
        animationFrameId = window.requestAnimationFrame(render);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
          // Get ready for next frame by setting then=now, but also adjust for your
          // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
          then = now - (elapsed % fpsInterval);
          frameCount++;
          context.clearRect(0, 0, canvasSize.width!, canvasSize.height!);
          for (let i = 0; i < configs.numberOfRings; i++) {
            let offsetAngle = (i * configs.waveOffset * Math.PI) / 180;
            circleRadius += fitRadius * 2 + gapCircle;
            dotRadius = (1 + easeInQuad(i / configs.numberOfRings)) * fitRadius;

            let ring = new Ring({
              ctx: context,
              ringNo: i,
              radius: i * easeInQuad(i / configs.numberOfRings) * 15 + 300,
              initColor: `rgba(80, 44, 227,${1 - i / configs.numberOfRings})`,
            });

            ring.draw(startAngle!, offsetAngle);
          }

          startAngle >= 360 ? (startAngle = 0) : startAngle++;
        }
      };
      const startRendering = (fps: number) => {
        fpsInterval = 1000 / fps;
        then = Date.now();

        render();
      };
      startRendering(fps);
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context, resizeCanvas]);

  return (
    <div className={classes.container} ref={parentContainerRef}>
      {parentContainerRef ? (
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Canvas;
