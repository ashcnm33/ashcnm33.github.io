var canvas = document.querySelector("canvas");
// var canvas = document.getElementById("mycan");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

/*
// c.fillRect(x, y, width, height);
c.fillStyle = "rgb(255, 0, 0, 0.4)"; //To change the color
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#afafaf";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "#a8dfca";
c.fillRect(300, 300, 100, 100);
c.fillStyle = "red";
c.fillRect(500, 500, 100, 100);
//console.log("canvas");

//Line drawing
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#babadc"; //Set the line color before the stroke
c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#edbedb";
// c.stroke();

for(var i = 0; i < 3; i ++){
    var x = Math.random() * window.innerWidth; //These two lines randomize the circle each time the page refreshes
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    // c.arc(300, 300, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "#decabe";
    c.stroke();
}
*/

// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

function Circle(x, y, dx, dy, radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "pink";
        c.stroke();
        // c.fill();
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dy;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 100; i ++){
    var radius = 30;

    // var circle = new Circle(200, 200, 3, 3, 30);
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 6;
    var dy = (Math.random() - 0.5) * 6;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();