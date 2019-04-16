var fft, mic;

function setup(){
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  frameRate(60);
}

function draw(){
  background(255);
  stroke(0);

  var waveform = fft.waveform();
  noFill();
  beginShape();
  strokeWeight(5);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}
