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
    )

    this.jumpSpeed = 0
    this.baseY = height - this.charHeight
    this.gravity = 3
  }
  jump() {
    this.jumpSpeed = -30
  }
  applyGravity() {
    this.y = this.y + this.jumpSpeed
    this.jumpSpeed = this.jumpSpeed + this.gravity
    if(this.y > this.baseY) {
      this.y = this.baseY
    }
  }
  isColliding(enemy){
    const precision = .7
    return collideRectRect(
      this.x,
      this.y,
      this.charWidth * precision,
      this.charHeight * precision,
      enemy.x,
      enemy.y,
      enemy.charWidth * precision,
      enemy.charHeight * precision,
    )
  }
}