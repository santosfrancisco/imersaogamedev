class Enemy extends Animate {
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
  }
  move(){
    this.x = this.x - this.speed
    if(this.x < -this.charWidth - this.delay) {
      this.x = width
    }
  }
}