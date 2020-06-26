class Game {
  constructor() {
    this.currentEnemy = 0
  }
  setup() {
    for(let i = 1; i <= 6; i++){
      bgs[i] = new Bg(bgImages[i], i * 2)
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
      80,
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
      80,
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
      80,
    )
  
    enemies.push(
      ovni,
      frog,
      yeti
    )
  
    gameMusic.loop()
  }
  keyPressed(key) {
    switch (key) {
      case 'ArrowUp':
        char.jump()
        jumpSound.play()
        break;
    }

  print(key, ' ', keyCode);
  return false; // prevent default
  }
  draw() {
    bgs.forEach(bg => {
      bg.show()
      bg.move()
    })
  
    char.show()
    char.applyGravity()
    
    const enemy = enemies[this.currentEnemy]
    const isEnemyVisible = enemy.x < -enemy.charWidth
    
    enemy.show()
    enemy.move()
    
    if(isEnemyVisible) {
      this.currentEnemy = parseInt(random(0, 3))
      if(this.currentEnemy >= enemies.length) this.currentEnemy = 0
      enemy.speed = parseInt(random(10,35))
    }
  
    if(char.isColliding(enemy)) {
      console.log('colidiu')
      image(gameOverImage, width*.5 - 200, height*.5)
      gameOver = true
      noLoop()
    }
  
    score.show()
    score.addPoints()
  }
}