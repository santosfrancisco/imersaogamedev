function preload() {
  for(let i = 1; i <= 6; i++){
    bgImages[i] = loadImage(`imagens/cenario/bg-parallax/Hills Layer 0${i}.png`)
  }
  gameOverImage = loadImage('imagens/assets/game-over.png')
  charImage = loadImage('imagens/personagem/char.png')
  enemiesGroupImage = loadImage('imagens/inimigos/enemies.png')
  startScreenImage = loadImage('imagens/assets/telaInicial.png')
  font = loadFont('imagens/assets/fonteTelaInicial.otf')
  gameMusic = loadSound('sons/town.mp3')
  jumpSound = loadSound('sons/som_pulo.mp3')
}