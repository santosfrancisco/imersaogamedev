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
  }
  move(){
    this.x = this.x - 10
    if(this.x < -this.charWidth) {
      this.x = width
    }
  }
}