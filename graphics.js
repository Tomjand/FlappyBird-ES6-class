const cvs = document.querySelector("#canvas");
const ctx = cvs.getContext("2d");

const IMG = "./assets/images/";

const bgImg = new Image();
bgImg.src = `${IMG}bg.png`;

const birdImg = new Image();
birdImg.src = `${IMG}bird.png`;

const pipeDownImg = new Image();
pipeDownImg.src = `${IMG}pipeDown.png`;

const pipeTop = new Image();
pipeTop.src = `${IMG}pipeTop.png`;

const graphics = {
  ctx,
  bgImg,
  birdImg,
  pipeDownImg,
  pipeTop
};

export default graphics;
