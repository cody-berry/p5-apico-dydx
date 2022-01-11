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


in pixels[], the first pixel's red is pixels[0], alpha is 
pixels[3]. The second pixel starts at pixels[4]. 

https://p5js.org/reference/#/p5/get
https://p5js.org/reference/#/p5/createGraphics
https://p5js.org/reference/#/p5/createImage


    // bees are always 3 pixels wide
    function generate_bee() {
        let yellow = color(42, 69, 84)
        let black = color(221, 66, 20)
        let wing = color(34, 3, 91)

        let pg = createGraphics(3, 2);
        pg.loadPixels()

        ?

        pg.updatePixels()
        return pg
    }

noSmooth()
noCursor()

// read a pixel art image and blow it up by n times in each dimension
function scale_image(img, factor) {
    let result = createImage(img.width*?, img.height*?)

    // use .get(x, y) and .set(x, y, c)
    // remember to result.loadPixels, result.updatePixels
    // draw on canvas first, then switch to createImage

    return result → in draw()/setup() image(result, width/2, height/2)
}


you're responsible for:
    photo thief
    coding plan
    loading background image of APICO
    generate_bee: use drawing pad to verify coordinates
    optional: generate cursor, but get your colors yourself
    scale_img: definitely use drawing pad.
        what is your createImage call?
    

 */


let font
let cursor
let environment
let bee
let scaleFactor

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
    // load our cursor and environment
    cursor = loadImage("img/apico-6x8-cursor.png")
    environment = loadImage("img/environment-640x360.png")
    // we'll need HSB to generate our bee
    colorMode(HSB, 360, 100, 100, 100)
    bee = generateBee()
    textFont(font)
}

function setup() {
    createCanvas(640, 360)
    // no cursor and no stroke
    noCursor()
    noStroke()
    // get a variable called scaleFactor that is manipulated with your wheel
    scaleFactor = 6
}

function draw() {
    background(209, 80, 30)
    image(environment, 0, 0)
    image(scaleImage(bee, scaleFactor), mouseX, mouseY)
}

// draws a bee
function generateBee() {
    let yellow = color(42, 69, 84)
    let black = color(221, 66, 5)
    let wing = color(34, 3, 91)

    let pg = createGraphics(3, 2)
    pg.loadPixels()

    pg.set(0, 1, black)
    pg.set(1, 1, yellow)
    pg.set(1, 0, wing)
    pg.set(2, 1, black)

    pg.updatePixels()
    return pg
}

// scales an image by a factor of n
function scaleImage(image, n) {
    let pg = createGraphics(image.width*n, image.height*n)
    pg.loadPixels()
    for (i = 0; i < image.width; i++) {
        for (j = 0; j < image.height; j++) {
            for (k = 0; k < n; k++) {
                for (m=0; m < n; m++) {
                    let c = image.get(i, j)

                    pg.set(k+i*n, m+j*n, c)
                }
            }
        }
    }
    pg.updatePixels()
    return pg
}

function mouseWheel(e) {
    if (e.delta > 0 && scaleFactor <= 1) {
        return
    }
    scaleFactor -= e.delta/100
}


