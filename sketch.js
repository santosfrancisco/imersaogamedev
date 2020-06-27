function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  button = new Button('START', width/2, height/2)
  intro = new Intro()
  game = new Game()
  intro.setup()
  game.setup()
  scenes = {
    intro,
    game,
  }
}

function keyPressed() {
  game.keyPressed(key)
  if(key === 'Escape') {
    window.location.reload()
  }
}

function draw() {
  scenes[currentScene].draw()
}

