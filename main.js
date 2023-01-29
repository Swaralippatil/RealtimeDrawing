nx=0;
ny=0;
difference=0;
rwx=0;
lwx=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('posenet is initialized');
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        nx=results[0].pose.nose.x;
        ny=results[0].pose.nose.y;
        console.log("nose x = " + nx + "nose y = " + ny);
        rwx=results[0].pose.rightWrist.x;
        lwx=results[0].pose.leftWrist.x;
        difference=floor(lwx-rwx);
        console.log("left wrist x = " + lwx + "right wrist x = " + rwx + "difference = " + difference);
    }
}
function draw() {
    background('#969A97');
    document.getElementById("square_sides").innerHTML="Width and height of the square will be " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(nx, ny, difference);
}
