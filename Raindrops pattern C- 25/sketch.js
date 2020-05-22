var drops = [];
function setup() { 
  createCanvas(400, 400);
  for(var i = 0; i < 300; i++) {
    drops.push(new Drop());
  }
} 

function draw() { 
  background(2, 40, 102);
	 stroke(0);
  for(var i = 0; i < drops.length; i++) {
   drops[i].display(); 
    drops[i].fall();
  }

}

 function Drop() {
   
   this.x = random(width);
   this.y = random(-500, -50);
   this.size = random(2, 9);
   this.speed = map(this.size, 1, 2, 1, 20);
  
   this.fall = function() {
    this.y =  this.y + this.speed;
     var grav = map(this.size, 1, 2, 0, 0.02);
     this.speed = this.speed + grav;
     
     if(this.y > height) {
       this.y = random(-200, -100);
      this.speed = map(this.size, 1, 5, 3, 10);
     }
   }
   
   this.display = function() {
  fill("white");
	noStroke();
	triangle(this.x - this.size/2, this.y, this.x, this.y-(this.size*2), this.x + this.size/2, this.y);
	ellipse(this.x, this.y, this.size, this.size*1.5);
   }
}