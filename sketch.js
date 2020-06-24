let bgImage
let charImage
let bg
let char
let gameMusic
let satyr
let satyrImages = []

function preload() {
  bgImage = loadImage('imagens/cenario/noite.jpg')
  charImage = loadImage('imagens/personagem/correndo.png')
  for(let i = 0; i <= 17; i++){
    satyrImages.push(loadImage(`imagens/personagem/char/Satyr_01_Walking_0${i < 10 ? `0${i}` : i}.png`))
  }
  gameMusic = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = new Bg(bgImage, 3)
  char = new Char(charImage)
  satyr = new Ninja(satyrImages)
  gameMusic.loop()
  frameRate(30)
}

function draw() {
  bg.show()
  bg.move()
  // char.show()
  satyr.show()
}

