class Game {
  constructor() {
    this.index = 0
    this.map = config.map
  }
  setup() {
    for(let i = 1; i <= 6; i++){
      bgs[i] = new Bg(bgImages[i], i * 2)
    }
    health = new Health(5, 5)
    score = new Score()
    char = new Char(
      charMatrix,
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
    )
  
    enemies.push(
      ovni,
      frog,
      yeti
    )
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
    bgs.forEach((bg, i) => {
      if(i> 5) return
      bg.show()
      bg.move()
    })

    score.show()
    score.addPoints()

    health.draw()
    char.show()
    char.applyGravity()
    const current = this.map[this.index]
    const enemy = enemies[current.enemy]
    const isEnemyVisible = enemy.x < -enemy.charWidth
    enemy.speed = current.speed
    
    enemy.move()
    enemy.show()
    
    if(isEnemyVisible) {
      this.index++
      enemy.appear()
      if(this.index > this.map.length -1) this.index = 0
    }
  
    if(char.isColliding(enemy)) {
      health.decreaseLife()
      char.getImmune()
      if(health.currentLife === 0) {
        image(gameOverImage, width*.5 - 200, height*.5)
        textAlign(CENTER)
        text(`Your score: ${parseInt(score.points)}`, width*.5, height*.5 - 100)
        noLoop()
        gameMusic.stop()
      }
    }
    bgs[6].show()
    bgs[6].move()
  }
}