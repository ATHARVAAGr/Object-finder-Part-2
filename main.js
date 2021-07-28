status="";

function setup()
{
    canvas=createCanvas(550,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function start()
{
     objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status -detecting objects";  
}

function modelLoaded()
{
    console.log("modelLoaded")
    status=true;
}