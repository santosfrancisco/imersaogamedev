class Ninja {
  constructor(charImages){
    this.charImages = charImages
    this.currentFrame = 0
    this.currImage = charImages[0]
  } 
  show(){
    image(
      this.currImage,
      0,
      height - 128,
      128,
      128
    )
    this.animate()
  }
  animate() {
    this.currentFrame++
    this.currImage = this.charImages[this.currentFrame++]
    if(this.currentFrame >= this.charImages.length -1) {
      this.currentFrame = 0
      this.currImage = this.charImages[0]
    }
  }
}