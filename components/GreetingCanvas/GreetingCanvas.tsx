import React, { useEffect, useRef, useState } from "react";
import classes from "./greetingCanvas.module.css";

// konva
import Konva from "konva";
import { Stage, Layer, Circle } from "react-konva";
import useWindowSize from "../../hooks/useWindowSize";
import { createParticleArr, Particle, tryParticleAnimation } from "./utils";

const GreetingCanvas = () => {
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastRenderTimeRef = useRef<number>(Date.now());
  const animationFrameRequestRef = useRef<number | null>(null);

  const windowSize = useWindowSize();

  const [particles, setParticles] = useState<Particle[]>([]);

  const [canvasSize, setCanvasSize] = useState({
    width: 400,
    height: 600,
  });

  const [mousePos, setMousePos] = useState({
    x: 9999,
    y: 9999,
  });

  useEffect(() => {
    if (parentContainerRef.current && canvasRef) {
      // canvas resize
      setCanvasSize({
        width: parentContainerRef.current.clientWidth,
        height: parentContainerRef.current.clientHeight,
      });
      // create particles
      const context = canvasRef.current?.getContext("2d");
      if (context != null) {
        const particleObjects = createParticleArr(context);
        setParticles(particleObjects);
      }
    }
  }, [windowSize, canvasSize.height, canvasSize.height]);

  useEffect(() => {
    requestAnimationFrame(renderFrame);
  }, [particles]);

  useEffect(() => {
    lastRenderTimeRef.current = Date.now();
    animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
    return () => {
      if (animationFrameRequestRef.current != null) {
        cancelAnimationFrame(animationFrameRequestRef.current);
      }
    };
  }, []);

  function renderFrame(): void {
    const context = canvasRef.current?.getContext("2d");
    if (context != null) {
      const timeNow = Date.now();

      clearBackground(context);
      drawParticles(particles, context);
      lastRenderTimeRef.current = timeNow;
    }
    animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
  }

  function clearBackground(context: CanvasRenderingContext2D): void {
    const { width, height } = canvasSize;
    context.rect(0, 0, width, height);
    context.fillStyle = "#FEFEFE";
    context.fill();
  }

  function drawParticles(
    particles: Particle[],
    context: CanvasRenderingContext2D
  ): void {
    particles.forEach((particle) => {
      // particle.update(mousePos.x, mousePos.y);
      // particle.resize(canvasSize.width, canvasSize.height);
      // particle.update();
      // particle.update(context);
    });
  }

  // useEffect(() => {
  //   if (parentContainerRef.current) {
  //     const canvas = canvasRef.current;
  //     const context = canvas?.getContext("2d")!;
  //     context.fillStyle = "#FEFEFE";

  //     const updateParticles = () => {
  //       particles.forEach((particle) => {
  //         // particle.update(mousePos.x, mousePos.y);
  //         // particle.resize(canvasSize.width, canvasSize.height);
  //         particle.draw(context);
  //       });
  //     };
  //     updateParticles();
  //     const loop = () => {
  //       context.clearRect(0, 0, canvasSize.width, canvasSize.height);
  //       updateParticles();
  //       requestAnimationFrame(loop);
  //     };

  //     loop();
  //   }
  // }, [canvasSize.width, canvasSize.height, mousePos]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (canvasRef.current) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      onMouseMove(e as any);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (canvasRef.current) {
      const x = (e.offsetX / canvasRef.current.offsetWidth) * canvasSize.width;
      const y =
        (e.offsetY / canvasRef.current.offsetHeight) * canvasSize.height;
      setMousePos({ x, y });
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    setMousePos({ x: 9999, y: 9999 });
  };

  return (
    <div className={classes.container} ref={parentContainerRef}>
      {parentContainerRef ? (
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          onMouseMove={onMouseDown}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GreetingCanvas;
