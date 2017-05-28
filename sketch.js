var picture1;
var myhtmlcanvas;

function preload() {
  picture1 = loadImage('IMG/room1.1.png');


}


function setup()
{
  //create a drawing service 700px wide, 500px tall
  myhtmlcanvas = createCanvas(800,600);
  myhtmlcanvas.parent('canvasHolder');

}

function draw()
{
  image(picture1,0,0);
}