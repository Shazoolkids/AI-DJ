song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWristX = 0;
function preload()
{
  song = loadSound("music.mp3");
}

function setup()
{
  canvas = createCanvas(650,550);
  canvas.center()
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function play()
{
  song.play();
  song.setVolume(1);
  song.rate(1);
}
function draw()
{
  image(video, 0, 0, 650, 550);
  fill("#32a852");
  stroke("#5f32a8");
  if(scoreLeftWrist > 0.2)
  {
  circle(leftWristX, leftWristY, 20);
  InNumberleftWristY = Number(leftWristY);
  remove_decimals = floor(InNumberleftWristY);
  volume= remove_decimals/500;
  document.getElementById("volume").innerHTML = "Volume = " + volume;
  song.setVolume(volume);
  }
  fill("#32a852");
  stroke("#5f32a8");
  if(scoreRightWrist > 0.2)
  {
circle(rightWristX, rightWristY, 20);
if(rightWristY > 0 && rightWristY <= 100) 
{
document.getElementById("speed").innerHTML= "Speed = 0.5x";
song.rate(0.5);
}

 else if(rightWristY > 1000 && rightWristY <= 200) 
{
document.getElementById("speed").innerHTML= "Speed = 1x";
song.rate(1);
}
}
if(rightWristY > 200 && rightWristY <= 300) 
{
document.getElementById("speed").innerHTML= "Speed = 1.5x";
song.rate(1.5);
}

if(rightWristY > 300 && rightWristY <= 400) 
{
document.getElementById("speed").innerHTML= "Speed = 2x";
song.rate(2);
}

if(rightWristY > 400 && rightWristY <= 500) 
{
document.getElementById("speed").innerHTML= "Speed = 2.5x";
song.rate(2.5);
}
}
function modelLoaded()
{
  console.log("PoseNet is initialized");
}
function gotPoses() 
{
if (results.length > 0)
{
  console.log(results);
  scoreRightWrist = results[0].pose.ketypoints[10].score;
  scoreLeftWrist = results[0].pose.ketypoints[9].score;
  console.log("scoreRightWrist = " + scoreRightWrist + "ScoreLeftWrist = " + scoreLeftWrist);
  console.log("scoreLeftWrist = " + scoreLeftWrist);
  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  console.log("leftWristX = " +leftWrist +"leftWristY = " + leftWristY);

  rightWristX = results[0].pose.leftWrist.x;
  rightWristY = results[0].pose.leftWrist.y;
  console.log("rightWristX = " +rightWrist +"rightWristY = " + rightWristY);

}
}
