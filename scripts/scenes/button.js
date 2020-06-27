class Button {
  constructor(text, x, y) {
    this.text = text,
    this.x = x
    this.y = y

    this.button = createButton(this.text)
    this.button.mousePressed(() => this._changeScene())
    this.button.addClass('intro-screen-button')
  }
  draw() {
    this.button.position(this.x , this.y)
  }
  _changeScene() {
    this.button.remove()
    select.remove()
    gameMusic.stop()
    introMusic.loop()
    currentScene = 'game'
  }
}