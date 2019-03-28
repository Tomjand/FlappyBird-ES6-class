import graphics from "./graphics.js";
import Vector from "./vector.js";
import Pipe from "./pipe.js";

class Game {
  constructor() {
    this.counterFrame = 0;
    this.bird = new Vector(10, 100);
    this.velocity = new Vector(10, 20);
    this.velocity.setLength(3);
    this.velocity.setAngle(Math.PI / 2);
    this.pipes = [];
    this.loop = () => {
      this.update();
      requestAnimationFrame(this.loop);
    };
  }

  update() {
    this.counterFrame++;
    graphics.ctx.drawImage(graphics.bgImg, 0, 0);
    if (this.counterFrame === 150) {
      this.pipes.push(new Pipe(200, 300, 1, Math.PI));
      this.counterFrame = 0;
    }
    console.log(this.pipes);
    this.pipes.map(pipe => {
      if (pipe.position.x < 0 - graphics.pipeDownImg.width) {
        this.pipes.shift();
      }
      pipe.updatePosition();
      graphics.ctx.drawImage(
        graphics.pipeDownImg,
        pipe.position.x,
        pipe.position.y
      );
    });

    this.bird.incrementVector(this.velocity);
    graphics.ctx.drawImage(graphics.birdImg, this.bird.x, this.bird.y);
  }
}

const myGame = new Game();
myGame.loop();
