var fireworks = [];
function setup() {
	simple();
	background(51);
	for (var i= 0 ; i < 250;i++){
		fireworks.push(new Firework());
	}
	loop();
	colorMode(HSB);
}


function draw() {
		for(var step = 0; step < 10; step++){
			for (fire of fireworks){
				fire.show();
				fire.move();
			}
			for (fire of fireworks){
			fire.explode();
			}
		}	
}

class Firework{
	constructor(){
		noStroke();
		var a = width/2;
		var b = height/2;
		this.x = a;
		this.y = b;
		this.speedX = random() * 5 - 2.5;
		this.speedY = random()*5;
		this.gravity = 0.01;
		this.hue =  randomNumber(random(0,random(60,255)),randomNumber(120,255)) * noise(cos(randomNumber(0,60)));
	}

	show(){
		fill(this.hue , 100,100,0.3);
		circle(this.x,this.y,2);
	}
	move(){
	this.x+= this.speedX;
	this.y-= this.speedY;
	this.speedY -= this.gravity;
	}
	explode(){
		fill(this.hue, 100, 100, 0.3);
		circle(this.x, this.y, 20);
		fill( this.hue , 100, 100, 0.8);
		circle(this.x,  this.y, 7);
	}
}