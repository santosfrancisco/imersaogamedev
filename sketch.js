let bgs = []
let bgImages = []
let gameOverImage
let char
let charImage
let score
let gameMusic
let jumpSound
let enemiesGroupImage
let ovni
let frog
let yeti


const enemies = []

const bombermanMatrix = [
  [0,0],
  [0,0],
  [80,0],
  [80,0],
  [80*2,0],
  [80*2,0],
  [80*3,0],
  [80*3,0],
  [80*4,0],
  [80*4,0],
  [80*5,0],
  [80*5,0],
  [80*6,0],
  [80*6,0],
  [80*7,0],
  [80*7,0],
  [80*8,0],
  [80*8,0],
]
const ovniMatrix = [
  // [70 + (0) ,80*5],
  // [70 + (0) ,80*5],
  [70 + (80) ,80*5],
  [70 + (80) ,80*5],
  [70 + (80*2) ,80*5],
  [70 + (80*2) ,80*5],
  [70 + (80*3) ,80*5],
  [70 + (80*3) ,80*5],
  [70 + (80*4) ,80*5],
  [70 + (80*4) ,80*5],
  [70 + (80*5) ,80*5],
  [70 + (80*5) ,80*5],
  [70 + (80*6) ,80*5],
  [70 + (80*6) ,80*5],
  [70 + (80*7) ,80*5],
  [70 + (80*7) ,80*5],
  [70 + (80*8) ,80*5],
  [70 + (80*8) ,80*5],
  [70 + (80*9) ,80*5],
  [70 + (80*9) ,80*5],
  [70 + (80*10) ,80*5],
  [70 + (80*10) ,80*5],
]
const frogMatrix = [
  [70 + (80*6) ,80*0],
  [70 + (80*6) ,80*0],
  [70 + (80*5) ,80*0],
  [70 + (80*5) ,80*0],
  [70 + (80*4) ,80*0],
  [70 + (80*4) ,80*0],
  [70 + (80*3) ,80*0],
  [70 + (80*3) ,80*0],
  [70 + (80*2) ,80*0],
  [70 + (80*2) ,80*0],
  [70 + (80*1) ,80*0],
  [70 + (80*1) ,80*0],
  [70 + (80*0) ,80*0],
  [70 + (80*0) ,80*0],
]
const yetiMatrix = [
  [70 + (80*10) ,80*3],
  [70 + (80*10) ,80*3],
  [70 + (80*9) ,80*3],
  [70 + (80*9) ,80*3],
  [70 + (80*8) ,80*3],
  [70 + (80*8) ,80*3],
  [70 + (80*7) ,80*3],
  [70 + (80*7) ,80*3],
  [70 + (80*6) ,80*3],
  [70 + (80*6) ,80*3],
  [70 + (80*5) ,80*3],
  [70 + (80*5) ,80*3],
  [70 + (80*4) ,80*3],
  [70 + (80*4) ,80*3],
  [70 + (80*3) ,80*3],
  [70 + (80*3) ,80*3],
]

function preload() {
  for(let i = 1; i <= 6; i++){
    bgImages[i] = loadImage(`imagens/cenario/bg-parallax/Hills Layer 0${i}.png`)
  }
  gameOverImage = loadImage('imagens/assets/game-over.png')
  charImage = loadImage('imagens/personagem/char.png')
  enemiesGroupImage = loadImage('imagens/inimigos/enemies.png')
  gameMusic = loadSound('sons/town.mp3')
  jumpSound = loadSound('sons/som_pulo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 1; i <= 6; i++){
    bgs[i] = new Bg(bgImages[i], i * 3)
  }
  score = new Score()
  char = new Char(
    bombermanMatrix,
    charImage,
    0,
    30,
    100,
    100,
    80,
    80,
  )
  ovni = new Enemy(
    ovniMatrix,
    enemiesGroupImage,
    width,
    230,
    80,
    80,
    80,
    80,
    10,
    200,
  )
  frog = new Enemy(
    frogMatrix,
    enemiesGroupImage,
    width,
    30,
    80,
    80,
    80,
    80,
    10,
    40,
  )
  yeti = new Enemy(
    yetiMatrix,
    enemiesGroupImage,
    width,
    30,
    100,
    100,
    80,
    80,
    12,
    800,
  )

  enemies.push(
    ovni,
    frog,
    yeti
  )
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
  bgs.forEach(bg => {
    bg.show()
    bg.move()
  })

  char.show()
  char.applyGravity()
  
  enemies.forEach(enemy => {
    enemy.show()
    enemy.move()
    
    if(char.isColliding(enemy)) {
      console.log('colidiu')
      image(gameOverImage, width*.5 - 200, height*.5)
      noLoop()
    }
  })
  score.show()
  score.addPoints()
}

