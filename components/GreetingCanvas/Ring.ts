function generateRandom(min = 0, max = 100) {
  let difference = max - min;

  let rand = Math.random();

  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
}
function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5);
}

interface Ring {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  radius: number;
  waveFrequency: number;
  maxWaveAmplitude: number;
  color: string;
  ringNo: number;
  scale: number;
  radians: number;
  velocity: number;
}

interface IBlob {
  ctx: CanvasRenderingContext2D | null;
  x: number;
  y: number;
  ringNo: number;
  radius: number;
  initColor?: string;
}

const ringCfg = {
  ringRadiusOffset: 15,
  ringRadius: 200,
  startAngle: 0,
  maxWaveAmplitude: 15, // wave size
  waveFrequency: 5, // how many waves on the circle
};

class Ring {
  constructor({ ctx, x, y, ringNo, radius, initColor }: IBlob) {
    this.ctx = ctx!;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = initColor || "#dcfdd8";
    this.waveFrequency = ringCfg.waveFrequency;
    this.maxWaveAmplitude = ringCfg.maxWaveAmplitude; // how high are the waves
    this.ringNo = ringNo;
    this.scale = 1;
    this.radians = 0;
    this.velocity = 0.05;
  }

  draw = (startAngle: number, offsetAngle: number) => {
    let amplitude = 15;
    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = (1 / this.ringNo) * 2;

    this.ctx.beginPath();

    for (let j = -180; j < 180; j++) {
      let currentAngle = ((j + startAngle) * Math.PI) / 180;
      let displacement = 0; // 0 to 1 variantions
      let now = Math.abs(j);

      let waveValue =
        Math.sin((currentAngle + offsetAngle) * this.waveFrequency) *
          this.maxWaveAmplitude +
        (this.ringNo + 1);

      if (now > 70) {
        displacement = (now - 70) / 70;
      }
      if (displacement >= 1) {
        displacement = 1;
      }
      let waveAmplitude = this.radius + displacement * waveValue;

      let x = this.x + Math.cos(currentAngle) * waveAmplitude; //return values from -1 to 1 200 = r
      let y = this.y + Math.sin(currentAngle) * waveAmplitude;
      j > -180 ? this.ctx.lineTo(x, y) : this.ctx.moveTo(x, y);
    }

    this.ctx.closePath();
    // first=== fill, rest===stroke
    // this.ringNo === 0 ? this.ctx.fill() : this.ctx.fill();
    this.ctx.fill();
  };
}

export default Ring;
