class Char extends Animate {
  constructor(
    matrix,
    image,
    x,
    y,
    charWidth,
    charHeight,
    spriteWidth,
    spriteHeight,
    speed,
    delay,
  ) {
    super(
      matrix,
      image,
      x,
      y,
      charWidth,
      charHeight,
      spriteWidth,
      spriteHeight,
      speed,
      delay,
    )

    this.jumpSpeed = 0
    this.baseY = height - this.charHeight - y
    this.gravity = 5
    this.jumps = 0
  }
  jump() {
    if(this.jumps >= 2) return
    this.jumpSpeed = -40
    this.jumps++
  }
  applyGravity() {
    this.y = this.y + this.jumpSpeed
    this.jumpSpeed = this.jumpSpeed + this.gravity
    if(this.y > this.baseY) {
      this.y = this.baseY
      this.jumps = 0
    }
  }
  isColliding(enemy){
    const precision = .8
    return collideCircleCircle(
      this.x + (this.charWidth/2),
      this.y + (this.charHeight/2),
      this.charWidth * precision,
      enemy.x + (enemy.charWidth/2),
      enemy.y + (enemy.charHeight/2),
      enemy.charWidth * precision,
    )
  }
}