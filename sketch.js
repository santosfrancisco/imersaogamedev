let bgImage
let charImage
let bg
let char
let gameMusic
let jumpSound
let enemy
let enemyImage
// let satyr
// let satyrImages = []
const charMatrix = [
  [0,0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]
const enemyMatrix = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

function preload() {
  bgImage = loadImage('imagens/cenario/noite.jpg')
  charImage = loadImage('imagens/personagem/correndo.png')
  enemyImage = loadImage('imagens/inimigos/gotinha.png')
  // for(let i = 0; i <= 17; i++){
  //   satyrImages.push(loadImage(`imagens/personagem/char/Satyr_01_Walking_0${i < 10 ? `0${i}` : i}.png`))
  // }
  gameMusic = loadSound('sons/trilha_jogo.mp3')
  jumpSound = loadSound('sons/som_pulo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = new Bg(bgImage, 3)
  char = new Char(
    charMatrix,
    charImage,
    0,
    height - 135,
    110,
    135,
    220,
    270
  )
  enemy = new Enemy(
    enemyMatrix,
    enemyImage,
    width - 52,
    52,
    52,
    52,
    104,
    104,
  )
  // satyr = new Satyr(satyrImages)
  gameMusic.loop()
  frameRate(30)
}

function keyPressed() {
  if(key === 'ArrowUp') {
    char.jump()
    jumpSound.play()
  }
}

function draw() {
  bg.show()
  bg.move()
  char.show()
  char.applyGravity()
  enemy.show()
  enemy.move()
  if(char.isColliding(enemy)) {
    console.log('colidiu')
  }
  // satyr.show()
}

