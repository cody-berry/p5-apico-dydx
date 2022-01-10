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

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
    background(209, 80, 30)
}