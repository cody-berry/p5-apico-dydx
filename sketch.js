/*
@author Cody
@date 2021-10-12
My own version of Apico. There will be at least some modifications.


    Cursor, noStroke(), noCursor()
    scale_image()
    generate_bee()
    tree top
    tree trunk
    tree shadow
    generate_rock()
        ...



 */
let font
let cursor
let environment
let bee

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
    // load our cursor and environment
    cursor = loadImage("img/apico-6x8-cursor.png")
    environment = loadImage("img/environment-640x360.png")
    textFont(font)
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // no cursor and no stroke
    noCursor()
    noStroke()
}

function draw() {
    background(209, 80, 30)
    image(cursor, mouseX, mouseY)
    image(environment, 0, 0)
}