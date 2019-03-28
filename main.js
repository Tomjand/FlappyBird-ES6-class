import graphics from "./graphics.js";
import Vector from "./vector.js";

class Game {
  constructor() {
    this.bird = new Vector(10, 100);
    this.loop = () => {
      this.update();
      requestAnimationFrame(this.loop);
    };
  }

  update() {
    graphics.ctx.drawImage(graphics.bgImg, 0, 0);
    graphics.ctx.drawImage(graphics.birdImg, this.bird.x, this.bird.y);
  }
}

const myGame = new Game();
myGame.loop();
