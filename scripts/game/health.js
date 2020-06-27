class Health {
  constructor(init, total){
    this.init = init
    this.currentLife = init -1
    this.total = total
    this.matrix = [
      [17*4,0],
      [17*3,0],
      [17*2,0],
      [17,0],
      [0,0],
    ]
  }
  draw(){
    image(
      heartImage, 
      20, 
      20, 
      17*3, 
      17*3, 
      this.matrix[this.currentLife][0], 
      this.matrix[this.currentLife][1], 
      17, 
      17
    )
  }

  increaseLife() {
    if(this.currentLife < this.total) this.currentLife++
  }

  decreaseLife() {
    this.currentLife--
  }
}