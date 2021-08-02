new p5();

let terrain;
function preload() {
    terrain=loadModel('terrain.stl');
}

function setup() {
    let myCanvas= createCanvas(displayWidth*0.5, displayHeight*0.5, WEBGL);
    myCanvas.parent("flood_container");

    slider = createSlider (0,100,0,1);
    slider.parent("slider_container");
    slider.style("width", "25vw");
}

function draw() {
    background(33,37,41);
    ambientLight(100);
    directionalLight(255,255,255,0.25,0.5,0.25);
    
    let val=slider.value()+100;
    translate(0,-val+150,0);
    fill(29,53,87);
    box(249,50,249);

    translate(0,val-150,0);
    fill(221,190,169);
    noStroke();
    scale(125);
    rotateX(1.57);
    smooth();
    model(terrain);
    
    orbitControl(2,2,2);
}
