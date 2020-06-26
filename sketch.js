function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  button = new Button('START', width/2, height/2)
  start = new Start()
  game = new Game()
  game.setup()
  scenes = {
    start,
    game,
  }
}

function keyPressed() {
  game.keyPressed(key)
}

function draw() {
  scenes[currentScene].draw()
}

