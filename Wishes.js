/*
read me please!!

!! Do not use headphone's mic!!

Both video and sound must be allowed on the website to run this program.
After logging in with Chrome, go to settings and allow the site's sound.
Chrome > Settings > Privacy & Security > Site Settings > The site 
> Change to Allow Camera, Microphone and Sound > Reconnect
*/


let countercounter=0;
let song;
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/Idlq9eaaa/';
let video;
let flippedVideo;
let label = "";

var amp,fft;
var x,y;
var darkness;
var moveX;

let c,vol_;
let xmove = [];
let ymove = [];
let xmove_ = [];
let p = 0;
let start = 0;
let lantern2 = [];
let count=0;
let move___ = [];

let a = [];
let wi = [];
let he = [];

let weight___ ;
let particles = [];

var n, s, maxR, ccc;
var spectrum = [];


function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  //song = loadSound('/data/Starry_Starry_Night.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(14, 12, 33);
  background(5,3,23);
  //background(0);
  //song.setVolume(0.1);
  //song.play();
    
  weight___ = windowHeight*sqrt(61)/60;
  
  for(let i = 0;  i < 30; i++){
    
    a[i] = random(4);
    wi[i] =random(windowWidth);
    he[i] = random(windowHeight);
    ellipse(random(windowWidth), random(windowHeight), a, a);
    
    xmove[i] = random(windowWidth/4, windowWidth*3/4);
    ymove[i] = windowHeight- windowHeight*sqrt(61)/120;
    xmove_[i] = random(windowWidth);
    
  }
  
  
  amp = new p5.AudioIn();
  amp.start()
  fft = new p5.FFT(0.9,64);
  fft.setInput(amp);
  y=0;
  
  
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  classifyVideo();
  
  lantern1 = new Lantern(windowHeight*sqrt(61)/7, 3, windowWidth/2, windowHeight/2);
  
}

function draw() {
  countercounter++;
  textSize(20);
  
    textAlign(LEFT);
    fill(255);
    text('Put your hands together and say your wish out loud.', 30, 70); 
    text('Then reach out your hand and blow the wind to blow the lanterns.', 30, 100);
    
  if(countercounter < 180){
    
    textSize(200);
    textAlign(RIGHT);
    fill(255);
    text('Wishes', 1400, 700);
      }

else{
  if(label == "pray2"){
    if(start == 0){
      initCanvas();
      start =1;
    }
    if(p==2){
      //background(14, 12, 33);
      //background(0);
      background(5,3,23);
      p=0;
      initCanvas();
    }
    for(let i = 0;  i < 30; i++){
    fill(255);
    ellipse(wi[i], he[i], a[i], a[i]);
  }
    
    frameRate(500);
    lantern1.displayL();
    
    
    drawing_();
    
    
    p = 1;
    
    
  }
  

  else if(label == "blow"){
    
    
    //background(14, 12, 33);
    //background(0);
    background(5,3,23);
    textAlign(LEFT);
    fill(255);
    text('Put your hands together and say your wish out loud.', 30, 70); 
    text('Then reach out your hand and blow the wind to blow the lanterns.', 30, 100);
    
    for(let i = 0;  i < 30; i++){
    fill(255);
    ellipse(wi[i], he[i], a[i], a[i]);
      
    
  }
  
    move___[count] = 1;
    
    move_();
    
    for(let i = 0;  i < count; i++){
    lantern2[i].displayF();
    lantern2[i].displayL();
    }
    p=2;
  
  }
          
  
    
  
  
  else if (label == "common"){
    //background(14, 12, 33);
    //background(0);
    background(5,3,23);
    textAlign(LEFT);
    fill(255);
    text('Put your hands together and say your wish out loud.', 30, 70); 
    text('Then reach out your hand and blow the wind to blow the lanterns.', 30, 100);
    
    for(let i = 0;  i < 30; i++){
    fill(255);
    ellipse(wi[i], he[i], a[i], a[i]);
  }
    for(let i = 0;  i < count; i++){
    lantern2[i].displayF();
    lantern2[i].displayL();
  }
    p=2;
    
    if(move___[count] == 1){
    move_();
  }
  }
  
}
}
  

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;
  classifyVideo();
}

function move_(){ 
  
    lantern2[count] = new Lantern(weight___ , 0.5, xmove[count], ymove[count]);
  
    
    lantern2[count].displayF();
    lantern2[count].displayL();
  
  let vol = amp.getLevel();
  
    
    if(vol>0.05){
      c = 1;
      vol_ = vol;
    }
    if(c == 1){
      
      let ymove_ = [] 
      ymove_[count] = vol_* 2000;
    
      if( xmove[count] >= xmove_[count] ){
        xmove[count] = xmove[count] -0.5;
      }
      else{
        xmove[count] =xmove[count] +0.5;
      }
      
      if(ymove[count] >= ymove_[count]){
        ymove[count]--;
        weight___ = weight___*0.999;
      }
      else{
        ymove[count] = ymove_[count];
        c=0;
        count++;
        weight___ = windowHeight*sqrt(61)/60;
        
        
      }
    }
}

function drawing_(){
  var vol = amp.getLevel();
  noFill();
    spectrum= fft.analyze();


  translate(width/2, height/2)
  noStroke()
  
  if(s > 1) {
    if(particles.length != 0) {
      for(let i = 0; i < particles.length; i++) {
        var p = particles[i]
        p.show()
        p.move()
        
        if(p.isDead()){ particles.splice(i, 1)}
      }
    } 
    else {
      s -= 2
      initParticles()
    }
}
}

function initParticles() {
  let mmax = max(spectrum);
  
    if(mmax<150){
      ccc = "#253259";
    }
    else if(150<=mmax && mmax<170){
      ccc = "#274179";
    }
    else if(170<=mmax && mmax<190){
      ccc = "#7EA1BF";
    }
    else if(190<=mmax && mmax<210){
      ccc = "#F2AE2E";
    }
    else if(210<=mmax && mmax<230){
      ccc = "#D97B29";
    }
    else if(230<=mmax && mmax<250){
      ccc ="#F2D43D";
    }
    else{
      ccc = color(14, 12, 33);
    }
    
  
  
  for(let i = 0; i < n; i++) {
    particles.push(new Particle(maxR, s, ccc))
  }
}


function initCanvas() {
  
  smooth()
  particles = []
  n = 150
  s = 20
  maxR = height/2 - height/10
}
