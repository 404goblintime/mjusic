sound1 = ""
sound2 = ""
leftWristX = ""
leftWristY = ""
rightWristX = ""
rightWristY = ""

function setup() {
    canvas = createCanvas(700, 700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is initialized!');
}

function draw() {
    image(video, 0, 0, 700, 700)
}

function preload() {
    sound1 = loadSound("mrloverman.mp3");
    sound2 = loadSound("withoutahook.mp3");
}

function play() {
    sound1.play();
    sound1.setVolume(0.2);
    sound1.rate(1);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("left Wrist X = " + leftWristX + "left Wrist Y = " + leftWristY);
        console.log("right Wrist X = " + rightWristX + "right Wrist Y = " + rightWristY);
        
    }}