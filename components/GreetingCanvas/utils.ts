import colormap from "colormap";

let colors = colormap({
  colormap: "plasma",
  nshades: 20,
});

interface IParticle {
  x: number;
  y: number;
  radius: number;
  ring: number;
}

function range(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function easeInQuad(x: number) {
  return x * x;
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

function easeInQuint(x: number): number {
  return x * x * x * x * x;
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
  minRadius: number;
  maxRadius: number;
  ring: number;

  constructor({ x, y, radius, ring }: IParticle) {
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

    // initial radius
    this.radius = radius;

    //initial scale
    this.scale = 1;

    //initial color
    this.color = colors[2];

    //ring multiplier
    this.ring = ring + 1;

    this.minRadius = 2;
    this.maxRadius = 22;

    this.minDist = 100;
    this.pushFactor = 0.08;
    this.pullFactor = 0.02;
    this.dampFactor = 0.9;
  }

  update(context: CanvasRenderingContext2D) {
    this.resize(this.ring);
    this.draw(context);
  }

  resize = (ring: number) => {
    // random
    let random = Math.random() * (0.01 - 0.025) + 0.025;
    let ranDir = Math.floor(Math.random()) * (1 - -1) + -1;
    // scale factor
    this.scale = this.scale + 0.0025 * ring;
  };

  // update(mouseX: number, mouseY: number) {
  //   let dx, dy, dd, distDelta;

  //   //pull force - works on the particle constantly regardles of the cursor position;
  //   dx = this.ix - this.x;
  //   dy = this.iy - this.y;
  //   dd = Math.sqrt(dx * dx + dy * dy);
  //   this.ax = dx * this.pullFactor;
  //   this.ay = dy * this.pullFactor;

  //   // push force
  //   dx = this.x - mouseX;
  //   dy = this.y - mouseY;
  //   dd = Math.sqrt(dx * dx + dy * dy);
  //   distDelta = this.minDist - dd;

  //   if (dd < this.minDist - dd) {
  //     this.ax = (dx / dd) * distDelta * this.pushFactor;
  //     this.ay = (dy / dd) * distDelta * this.pushFactor;
  //   }

  //   // this.ax += 0.001;
  //   this.vx += this.ax;
  //   this.vy += this.ay;

  //   this.vx *= this.dampFactor;
  //   this.vy *= this.dampFactor;

  //   this.x += this.vx;
  //   this.y += this.vy;
  // }

  // resize = (canvasW: number, canvasH: number) => {
  //   let dx, dy, dd;
  //   dx = canvasW / 2 - this.x;
  //   dy = canvasH / 2 - this.y;
  //   dd = Math.sqrt(dx * dx + dy * dy);

  //   this.scale = Math.abs(this.scale - (dd / 900) * 1);
  // };

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color as string;
    let s = 1 - Math.abs(Math.sin(this.scale)) + 0.1;

    let r = this.radius * s;

    context.beginPath();
    context.arc(this.x, this.y, r, 0, Math.PI * 2);
    context.fill();
  }
}

export function tryParticleAnimation(context: CanvasRenderingContext2D) {
  const { width, height } = context.canvas;
  const numberOfParticles = 12;
  let particles: Particle[] = [];
  let x, y, particle;
  for (let i = 0; i < numberOfParticles; i++) {
    x = width * 0.5;
    y = height * 0.5;
    particle = new Particle({ x, y, radius: 12, ring: i });
    particles.push(particle);
  }
  return particles;
}

export function createParticleArr(context: CanvasRenderingContext2D) {
  const { width, height } = context.canvas;
  const numberOfRings = 12;
  let gapCircle = 4;
  let gapDot = 4;
  let dotRadius = 12;
  let circleRadius = 0;
  const fitRadius = dotRadius;
  let x, y;

  let particles: Particle[] = [];
  for (let i = 0; i < numberOfRings; i++) {
    const circumference = Math.PI * 2 * circleRadius;
    // number of particles around the circle
    const numFit = i ? Math.floor(circumference / (fitRadius * 2 + gapDot)) : 1;
    const fitSlice = (Math.PI * 2) / numFit;
    for (let j = 0; j < numFit; j++) {
      // angle of each particle
      const theta = fitSlice * j;
      x = Math.cos(theta) * circleRadius;
      y = Math.sin(theta) * circleRadius;
      x += width * 0.5;
      y += height * 0.5;
      let particle = new Particle({ x, y, radius: dotRadius, ring: i });
      particles.push(particle);
    }
    circleRadius += fitRadius * 2 + gapCircle;
    dotRadius = (1 - easeInQuad(i / numberOfRings)) * fitRadius;
  }
  return particles;
}
