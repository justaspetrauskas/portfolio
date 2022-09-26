import React, { useEffect, useRef, useState } from "react";
import classes from "./greetingCanvas.module.css";

// konva
import Konva from "konva";
import { Stage, Layer, Circle } from "react-konva";
import useWindowSize from "../../hooks/useWindowSize";
import { createParticleArr, Particle } from "./utils";

const GreetingCanvas = () => {
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const windowSize = useWindowSize();

  const [particles, setParticles] = useState<Particle[]>([]);

  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  const [mousePos, setMousePos] = useState({
    x: 9999,
    y: 9999,
  });

  useEffect(() => {
    if (parentContainerRef.current) {
      // canvas resize
      setCanvasSize({
        width: parentContainerRef.current.clientWidth,
        height: parentContainerRef.current.clientHeight,
      });

      // make responsive circle radius
      // setJointRadius(
      //   Math.round(
      //     getCanvasToWindowRatio(window, parentContainerRef) *
      //       radiusMultiplier
      //   )
      // );
    }
  }, [windowSize]);

  useEffect(() => {
    if (parentContainerRef.current) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d")!;
      context.fillStyle = "rgba(255, 255, 255, 0.9)";

      const updateParticles = () => {
        particles.forEach((particle) => {
          // particle.update(mousePos.x, mousePos.y);
          particle.draw(context);
        });
      };
      updateParticles();
      const loop = () => {
        context.clearRect(0, 0, canvasSize.width, canvasSize.height);
        updateParticles();
        requestAnimationFrame(loop);
      };

      loop();
    }
  }, [canvasSize.width, canvasSize.height, mousePos]);

  useEffect(() => {
    if (canvasSize.width !== 0 && canvasSize.height !== 0) {
      const particleObjects = createParticleArr(
        canvasSize.width,
        canvasSize.height
      );
      setParticles(particleObjects);
    }
  }, [canvasSize.width, canvasSize.height]);

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
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseMove={onMouseDown}
      />
    </div>
  );
};

export default GreetingCanvas;
