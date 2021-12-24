img = "";
status = "";

function preload()
{
    img = loadImage('TV.png');
}

function setup()
{
    canvas = createCanvas(550, 350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
console.log("model loaded!");
status = true;
objectDetector.detect(img, gotResult);
document.getElementById("status").innerHTML = "status : 1 object detected";
}

function gotResult(error, results)
{
if (error){
console.log(error);
}
console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}