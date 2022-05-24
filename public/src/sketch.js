let pack;
/**
 * TODO: 
 * Could be handled automatically by file/folder structures. 
 */
const PSIZE = 132
const LAYERS = 23 // total 23

// To stop blurring pixel 
let completed_draw = false

function preload() {
    pack = loadImage('./assets/pack.png')
}

const draw_rect = (i) => {
    image(pack,0,0, width, height, 0, PSIZE * i, PSIZE, PSIZE)
}

/**
 * Setup behaviour of the generation
 */
function load_pack(){
    // console.log(`${fxhash}:${fxhash.length}`)

    // 0-background
    image(pack,0,0, width, height, 0, PSIZE * 0, PSIZE, PSIZE)

    // 1-frame
    image(pack,0,0, width, height, 0, PSIZE * 1, PSIZE, PSIZE)

    // 22-layers 
    for(let i = 2; i < LAYERS; i++){

        // compare byte of each FxHash char:
        let val = fxhash.charCodeAt(i)
        // console.log(`${val}:${fxhash[i]}`)
        
        // custom rarity of some attributes
        switch(i) {
            case 2: // Stair
            if(val % i != 0) 
            draw_rect(i); 
            break;

            case 3: // Tomb
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 4: // Cloud_R
            if(val % i != 0) 
            draw_rect(i); 
            break;

            case 5: // Cloud_L
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 6: // Ball_4
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 7: // Ball_3
            if(val % i != 0) 
            draw_rect(i); 
            break;

            case 8: // Ball_2
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 9: // Ball_1
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 10: // Grass_2
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 11: // Grass_1
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 12: // Tree
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 13: // Gold_Bag
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 14: // Skull
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 15: // Sword
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 16: // Stone
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 17: // Leaf_3
            if(val % i != 0) 
            draw_rect(i); 
            break;

            case 18: // Leaf_2
            if(val % i != 0) 
            draw_rect(i); 
            break;

            case 19: // Leaf_1
            if(val % i != 0) 
            draw_rect(i); 
            break;

            case 20: // Wind_3
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 21: // Wind_2
            if(val % i == 0) 
            draw_rect(i); 
            break;

            case 22: // Wind_1
            if(val % i == 0) 
            draw_rect(i); 
            break;

            default: console.log(`unsupported layer ${i}`) 
        }
    }

    // load
    loadPixels()
}

function setup () {
    // canvas size setup
    createCanvas(windowWidth, windowWidth)
    // console.log(`init: ${width}x${height}`)
}

function draw () {
    // background(fcolor)
    load_pack()
    noSmooth()
    
    // update 
    updatePixels()

    // 2 frame rendered.
    if(completed_draw) { 
        
        // calling for preview
        fxpreview()

        // stop looping
        noLoop()
    }
    // 1st frame rendered
    else completed_draw = true
}

function windowResized(){

    // scaling pixels
    let ratio = [windowWidth/PSIZE, windowHeight/PSIZE]
    let smallest = ratio[0] > ratio[1] ? ratio[1] : ratio[0]
    scale(smallest, smallest)

    // scaling canvas
    let smallest_side = windowWidth > windowHeight ? windowHeight : windowWidth
    resizeCanvas(smallest_side, smallest_side)
}