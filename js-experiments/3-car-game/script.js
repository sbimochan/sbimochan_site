function Car(carDiv, track) {
  this.element = carDiv;
  this.track = track;
  // console.log(this.track);

  this.x = 250;
  this.y = 0;
  this.dy = 5;

  this.updatePosition = function() {
    this.y = this.y + this.dy;
    this.track.style.backgroundPosition = "center " + this.y + "px";
    if (this.y > 5000) {
      alert("game over");
      this.y = 0;
    }
    this.element.style.left = this.x + "px";
    if (this.x > 600 || this.x < 0) {
      gameOver();
    }
  };
  this.moveLeft = function() {
    this.x -= 180;
    if (this.x < 70) {
      this.x = 70;
    }
  };
  this.moveRight = function() {
    this.x += 180;
    if (this.x > 430) {
      this.x = 430;
    }
  };
  gameOver = function() {
    document.getElementById("gameover").innerHTML = "Game Over!";
  };
}
carDiv = document.getElementById("car");
trackDiv = document.getElementById("track");
var car = new Car(carDiv, trackDiv);

setInterval(function() {
  car.updatePosition();
}, 10);
document.onkeydown = function(event) {
  if (event.keyCode == 37) {
    car.moveLeft();
  }
  if (event.keyCode == 39) {
    car.moveRight();
  }
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Obstacle() {
  this.y = 0;
  var that = this;
  this.obstacle = document.createElement("div");
  this.obstacle.style.height = "80px";
  this.obstacle.style.width = "80px";
  this.obstacle.style.background = "red";
  // this.obstacle.style.top=this.y+"px";
  // this.obstacle.style.top=this.y+"px";
  this.updatePosition = function() {
    this.y = this.y + 1;
    this.obstacle.style.top = this.y + "px";
   
    if(this.y >500){
      // console.log(trackDiv);
      trackDiv.removeChild(this.obstacle);
    }
  };
  // this.obstacle.style.paddingLeft = getRandomInt(2, 10) + "px";
  this.obstacle.style.paddingRight = getRandomInt(2, 10) + "px";

  this.obstaclePosition = function() {
    positions = [30, 260, 450];
    var position = positions[Math.floor(Math.random() * positions.length)];
    return position;
  };
  this.obstacle.style.left = this.obstaclePosition() + "px";
  this.obstacle.style.position = "absolute";
  trackDiv.appendChild(this.obstacle);
  // setInterval(this.approachCar,1000);
}
var obstacles = [];
function createObstacle(number) {
  for (i = 0; i < number; i++) {
    obstacle = new Obstacle();
    obstacles.push(obstacle);
  }
}
var track = document.getElementById("track");

createObstacle(3);
setInterval(function() {
  obstacles.forEach(function (obstacle) {
    
    obstacle.updatePosition();
  })
}, 10);
// setInterval(createObstacle, 3000);

// console.log(tracks);
// console.log(obstacle);
