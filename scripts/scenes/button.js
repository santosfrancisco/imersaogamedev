class Button {
  constructor(text, x, y) {
    this.text = text,
    this.x = x
    this.y = y

    this.button = createButton(this.text)
    this.button.mousePressed(() => this._changeScene())
    this.button.addClass('start-screen-button')
  }
  draw() {
    this.button.position(this.x , this.y)
  }
  _changeScene() {
    this.button.remove()
    currentScene = 'game'
  }
}