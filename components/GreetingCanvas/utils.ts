import colormap from "colormap";

let colors = colormap({
  colormap: "viridis",
  nshades: 20,
});

interface IParticle {
  x: number;
  y: number;
  radius: number;
}

function range(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export class Particle {
  x: number;
  y: number;
  radius: number;
  ax: number;
  ay: number;
  ix: number;
  iy: number;
  vx: number;
  vy: number;
  scale: number;
  color: string | [number, number, number, number];
  minDist: number;
  pushFactor: number;
  pullFactor: number;
  dampFactor: number;

  constructor({ x, y, radius }: IParticle) {
    // position
    this.x = x;
    this.y = y;

    //acceleration
    this.ax = 0;
    this.ay = 0;

    // velocity
    this.vx = 0;
    this.vy = 0;

    //innitial position
    this.ix = x;
    this.iy = y;

    this.radius = radius;
    this.scale = 1;
    this.color = colors[0];
    this.minDist = 100;
    this.pushFactor = 0.08;
    this.pullFactor = 0.02;
    this.dampFactor = 0.9;
  }

  update(mouseX: number, mouseY: number) {
    let dx, dy, dd, distDelta;

    //pull force - works on the particle constantly regardles of the cursor position;
    dx = this.ix - this.x;
    dy = this.iy - this.y;
    dd = Math.sqrt(dx * dx + dy * dy);
    this.ax = dx * this.pullFactor;
    this.ay = dy * this.pullFactor;

    // push force
    dx = this.x - mouseX;
    dy = this.y - mouseY;
    dd = Math.sqrt(dx * dx + dy * dy);
    distDelta = this.minDist - dd;

    if (dd < this.minDist - dd) {
      this.ax = (dx / dd) * distDelta * this.pushFactor;
      this.ay = (dy / dd) * distDelta * this.pushFactor;
    }

    // this.ax += 0.001;
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx *= this.dampFactor;
    this.vy *= this.dampFactor;

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color as string;
    context.beginPath();
    context.arc(this.x, this.y, this.radius * this.scale, 0, Math.PI * 2);
    context.fill();
  }
}

export function createParticleArr(canvasW: number, canvasH: number) {
  const numberOfParticles = 12;
  let gapCircle = 4;
  let gapDot = 4;
  let dotRadius = 12;
  let circleRadius = 0;
  const fitRadius = dotRadius;
  let x, y;

  let particles: Particle[] = [];
  for (let i = 0; i < numberOfParticles; i++) {
    let radius;
    const circumference = Math.PI * 2 * circleRadius;
    // number of particles around the circle
    const numFit = i ? Math.floor(circumference / (fitRadius * 2 + gapDot)) : 1;
    const fitSlice = (Math.PI * 2) / numFit;
    for (let j = 0; j < numFit; j++) {
      // angle of each particle
      const theta = fitSlice * j;
      x = Math.cos(theta) * circleRadius;
      y = Math.sin(theta) * circleRadius;
      x += canvasW * 0.5;
      y += canvasH * 0.5;
      let particle = new Particle({ x, y, radius: dotRadius });
      particles.push(particle);
    }
    circleRadius += fitRadius * 2 + gapCircle;
    dotRadius = (1 - i / numberOfParticles) * fitRadius;
  }
  return particles;
}
