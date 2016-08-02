var video;
var canvas;
var canvas_w = screen.width;
var canvas_h = canvas_w / 1.6;

function setup() {
	canvas = createCanvas(canvas_w, canvas_h);
	canvas.class("fluid");
	
	capture = createCapture(VIDEO);
	capture.size(canvas_w, canvas_h);
	//capture.hide();
}

function draw() {
	background(255);
	image(capture, 0, 0, canvas_w, canvas_h);
	// filter('INVERT');
}