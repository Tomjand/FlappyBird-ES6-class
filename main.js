import graphics from "./graphics.js";
import GameObject from "./gameObject.js";

class Game {
  constructor() {
    this.counterFrame = 0;
    this.bird = new GameObject(10, 20, 3, Math.PI/2);
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
      this.pipes.push(new GameObject(200, 300, 1, Math.PI));
      this.counterFrame = 0;
    }
    this.pipes.map(pipe => {
      if (pipe.position.x < -200 - graphics.pipeDownImg.width) {
        this.pipes.shift();
      }
      pipe.updatePosition();
      graphics.ctx.drawImage(
        graphics.pipeDownImg,
        pipe.position.x,
        pipe.position.y
      );
    });

    this.bird.updatePosition();
    graphics.ctx.drawImage(graphics.birdImg, this.bird.position.x, this.bird.position.y);
  }
}

const myGame = new Game();
myGame.loop();
