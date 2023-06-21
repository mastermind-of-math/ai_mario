function preload() {
	world_start = loadSound("world_start.wav");
    mario_die = loadSound("mariodie.wav")
    mario_jump = loadSound("jump.wav")
    mario_kick = loadSound("kick.wav")
    mario_coin = loadSound("coin.wav")
    mario_over = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

var posenet = true;

function setup() {
	canvas = createCanvas(1240, 336);
    canvas.parent("canvas");
	instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.parent("game_console");
    video.size(500, 300);
    if(posenet){
        posenet = ml5.poseNet(video, modelLoaded);
        posenet.on("pose", gotPoses)
    }
}

function draw() {
    game();
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}






