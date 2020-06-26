class Animate {
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
    this.speed = speed || 0
    this.delay = delay || 0
    this.matrix = matrix
    this.image = image
    this.charWidth = charWidth
    this.charHeight = charHeight
    this.x = x + this.delay
    this.y = height - this.charHeight - y
    this.spriteWidth = spriteWidth
    this.spriteHeight = spriteHeight

    this.currentFrame = 0
  }

  show(){
    image(
      this.image,
      this.x,
      this.y,
      this.charWidth,
      this.charHeight,
      this.matrix[this.currentFrame][0],
      this.matrix[this.currentFrame][1],
      this.spriteWidth,
      this.spriteHeight
    )
    this.animate()
  }
  animate() {
    this.currentFrame++
    if(this.currentFrame >= this.matrix.length -1) {
      this.currentFrame = 0
    }
  }
}