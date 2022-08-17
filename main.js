function setup(){
    video=createCapture(VIDEO);
    video.size(500,480);
    video.position(40,80);
    canvas= createCanvas(550,400);
    canvas.position(590,115);
    posenet=ml5.poseNet(video,model_loaded);
}

function model_loaded(){
    console.log("PoseNet initialized");
    posenet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}