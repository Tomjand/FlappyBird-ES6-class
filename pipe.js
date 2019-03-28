import Vector from "./vector.js";

class Pipe {
  constructor(x = 0, y = 0, speed, direction) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
  }

  updatePosition() {
    this.position.incrementVector(this.velocity);
  }
}

export default Pipe;
