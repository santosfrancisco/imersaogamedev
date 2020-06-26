class Start {
  constructor() {

  }
  draw() {
    this._bgImage()
    this._text()
    this._button()
  }
  _bgImage() {
    image(startScreenImage, 0, 0, width, height)
  }
  _text() {
    textFont(font)
    textAlign('center')
    textSize(50)
    text('KnighT', width/2, 100)
    text('AdventureS', width/2, 150)
  }
  _button() {
    button.draw()
  }
}