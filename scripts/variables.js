let font
let config
let introScreenImage
let button
let bgs = []
let bgImages = []
let gameOverImage
let health
let heartImage

let select

let bombermanImage
let finnImage
let knightImage

let char
let charImage
let score
let introMusic
let gameMusic
let jumpSound
let enemiesGroupImage

let ovni
let frog
let yeti

let scenes
let currentScene = 'intro'

// scenes
let intro
let game

const enemies = []

const charMatrix = [
  [0,0],
  [0,0],
  [80,0],
  [80,0],
  [80*2,0],
  [80*2,0],
  [80*3,0],
  [80*3,0],
  [80*4,0],
  [80*4,0],
  [80*5,0],
  [80*5,0],
  [80*6,0],
  [80*6,0],
  [80*7,0],
  [80*7,0],
  [80*8,0],
  [80*8,0],
]
const ovniMatrix = [
  // [70 + (0) ,80*5],
  // [70 + (0) ,80*5],
  [70 + (80) ,80*5],
  [70 + (80) ,80*5],
  [70 + (80*2) ,80*5],
  [70 + (80*2) ,80*5],
  [70 + (80*3) ,80*5],
  [70 + (80*3) ,80*5],
  [70 + (80*4) ,80*5],
  [70 + (80*4) ,80*5],
  [70 + (80*5) ,80*5],
  [70 + (80*5) ,80*5],
  [70 + (80*6) ,80*5],
  [70 + (80*6) ,80*5],
  [70 + (80*7) ,80*5],
  [70 + (80*7) ,80*5],
  [70 + (80*8) ,80*5],
  [70 + (80*8) ,80*5],
  [70 + (80*9) ,80*5],
  [70 + (80*9) ,80*5],
  [70 + (80*10) ,80*5],
  [70 + (80*10) ,80*5],
]
const frogMatrix = [
  [70 + (80*6) ,80*0],
  [70 + (80*6) ,80*0],
  [70 + (80*5) ,80*0],
  [70 + (80*5) ,80*0],
  [70 + (80*4) ,80*0],
  [70 + (80*4) ,80*0],
  [70 + (80*3) ,80*0],
  [70 + (80*3) ,80*0],
  [70 + (80*2) ,80*0],
  [70 + (80*2) ,80*0],
  [70 + (80*1) ,80*0],
  [70 + (80*1) ,80*0],
  [70 + (80*0) ,80*0],
  [70 + (80*0) ,80*0],
]
const yetiMatrix = [
  [70 + (80*10) ,80*3],
  [70 + (80*10) ,80*3],
  [70 + (80*9) ,80*3],
  [70 + (80*9) ,80*3],
  [70 + (80*8) ,80*3],
  [70 + (80*8) ,80*3],
  [70 + (80*7) ,80*3],
  [70 + (80*7) ,80*3],
  [70 + (80*6) ,80*3],
  [70 + (80*6) ,80*3],
  [70 + (80*5) ,80*3],
  [70 + (80*5) ,80*3],
  [70 + (80*4) ,80*3],
  [70 + (80*4) ,80*3],
  [70 + (80*3) ,80*3],
  [70 + (80*3) ,80*3],
]
