function preload() {
  config = loadJSON('scripts/config.json')
  for(let i = 1; i <= 6; i++){
    bgImages[i] = loadImage(`images/background/bg-parallax/Hills Layer 0${i}.png`)
  }
  gameOverImage = loadImage('images/assets/game-over.png')
  heartImage = loadImage('images/assets/heart.png')
  
  bombermanImage = loadImage('images/chars/bomberman.png')
  finnImage = loadImage('images/chars/finn.png')
  knightImage = loadImage('images/chars/knight.png')
  charImage = bombermanImage

  enemiesGroupImage = loadImage('images/enemies/enemies.png')
  introScreenImage = loadImage('images/assets/telaInicial.png')
  font = loadFont('images/assets/SkateBrand.otf')
  
  introMusic = loadSound('sons/05 - Toxic Wasteland.mp3')
  gameMusic = loadSound('sons/08 - Welcome to Hell.mp3')
  jumpSound = loadSound('sons/som_pulo.mp3')
}