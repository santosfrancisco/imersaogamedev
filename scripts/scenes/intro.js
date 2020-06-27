class Intro {
  constructor() {

  }
  setup(){
    select = createSelect();
    select.addClass('intro-screen-select')
    select.position(width/2, height/2 + 180);
    select.option('Bomberman');
    select.option('Finn');
    select.option('Knight');
    select.changed(this.mySelectEvent);
    introMusic.loop()
  }
  mySelectEvent() {
    let item = select.value();
    switch (item) {
      case "Bomberman":
        char = new Char(
          charMatrix,
          bombermanImage,
          0,
          30,
          100,
          100,
          80,
          80,
        )
        break;
      case "Finn":
        char = new Char(
          charMatrix,
          finnImage,
          0,
          30,
          100,
          100,
          80,
          80,
        )
        break;
      case "Knight":
        char = new Char(
          charMatrix,
          knightImage,
          0,
          30,
          100,
          100,
          80,
          80,
        )
        break;
      }
  }

  draw() {
    this._bgImage()
    this._text()
    this._button()
  }
  _bgImage() {
    image(introScreenImage, 0, 0, width, height)
  }
  _text() {
    textFont(font)
    textAlign('center')
    textSize(50)
    fill('#000')
    text('Cool journeY', width/2, 100)
    textSize(32)
    text('the game', width/2, 150)

    textSize(32)
    fill('#fff')
    text('choose your hero', width/2, height/2 + 160)
  }
  _button() {
    button.draw()
  }
}