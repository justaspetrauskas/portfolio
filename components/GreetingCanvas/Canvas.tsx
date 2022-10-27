import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import classes from "./greetingCanvas.module.css";

import Ring from "./Ring";

function easeInQuad(x: number) {
  return x * x;
}

const configs = {
  numberOfRings: 20,
  gapCircle: 15,
  waveOffset: 5,
  radius: 25,
};

interface CanvasSize {
  width: number | null;
  height: number | null;
}

interface CanvasProps {
  fps?: number;
}

const Canvas = ({ fps = 30 }: CanvasProps) => {
  const windowSize = useWindowSize();
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [scaleRatio, setScaleRatio] = useState<number>(1);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (windowSize) {
      const { width, height } = windowSize;
      let ratio: number;
      if (width! > height!) {
        ratio = +(width! / height!).toFixed(2);
        setScaleRatio(ratio);
      }
      if (height! > width!) {
        ratio = +(width! / height!).toFixed(2);
        setScaleRatio(ratio);
      }
    }
  }, [windowSize]);

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
      // updating the centerX
      const originX = context.canvas.width / 2;
      const originY = context.canvas.height / 2;
      let x = originX;
      let y = originY;
      let radians = 0;
      let velocity = 0.00015;
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

          // creating ring and drawing
          for (let i = 0; i < configs.numberOfRings; i++) {
            radians += (velocity * i) / 10;
            x = originX + Math.cos(radians) * 50 * (i / 10);
            y = originY + Math.sin(radians) * 50 * (i / 10);

            let offsetAngle = (i * configs.waveOffset * Math.PI) / 180;

            let colorAlpha = 1 - i / configs.numberOfRings;
            let color = `rgba(80, 44, 227,${colorAlpha})`;

            let ring = new Ring({
              ctx: context,
              x: x,
              y: y,
              ringNo: i,
              radius: i * 15 + configs.radius * scaleRatio,
              initColor: color,
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
