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
    )
  }
  move(){
    this.x = this.x - this.speed
  }
  appear(){
    this.x = width
  }
}