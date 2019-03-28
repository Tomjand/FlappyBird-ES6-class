import graphics from "./graphics.js";
import Vector from "./vector.js";
import Pipe from "./pipe.js";

class Game {
  constructor() {
    this.bird = new Vector(10, 100);
    this.velocity = new Vector(10, 20);
    this.velocity.setLength(3);
    this.velocity.setAngle(Math.PI / 2);
    this.myPipe = new Pipe(200, 300, 1, Math.PI);
    this.loop = () => {
      this.update();
      requestAnimationFrame(this.loop);
    };
  }

  update() {
    graphics.ctx.drawImage(graphics.bgImg, 0, 0);
    this.bird.incrementVector(this.velocity);
    graphics.ctx.drawImage(graphics.birdImg, this.bird.x, this.bird.y);
    graphics.ctx.drawImage(
      graphics.pipeDownImg,
      this.myPipe.position.x,
      this.myPipe.position.y
    );
  }
}

const myGame = new Game();
myGame.loop();
