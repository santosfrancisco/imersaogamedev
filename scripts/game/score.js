class Score {
  constructor() {
    this.points = 0
  }
  show() {
    textAlign(RIGHT)
    fill('#000')
    textSize(60)
    text(parseInt(this.points), width - 30, 70)
  }
  addPoints(){
    this.points = this.points + 0.2
  }
}