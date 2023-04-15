const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const body = document.querySelector('body');
body.style.margin = 0;
const c = canvas.getContext('2d')
c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false );
c.strokeStyle = "pink";
c.stroke();

const animate = () => {
    requestAnimationFrame(animate)
   }
   animate()



   canvas.js
   let x = 200;
   let y = 200;
   const animate = () => {
   requestAnimationFrame(animate);
   c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false );
    c.strokeStyle = "pink";
    c.stroke();
    x += 1
    y += 1
   }
   animate()

canvas.js
let x = 200;
let dx = 5;
let y = 200;
let dy = 5;
let radius = 30
const animate = () => {
 requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);
 c.beginPath();
 c.arc(x, y, radius, 0, Math.PI * 2, false );
 c.strokeStyle = "pink";
 c.stroke();
if(x + radius > innerWidth || x - radius < 0){
 dx = -dx
 }
if(y + radius > innerHeight || y - radius < 0){
 dy = -dy
 }
 x += dx;
 y += dy;
} 
animate()




canvas.js
let x = Math.random() * innerWidth;
let dx = (Math.random() - 1) * 10;
let y = Math.random() * innerHeight;
let dy = (Math.random() - 1) * 10;
let radius = 30;
const animate = () => {
 requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);
 c.beginPath();
 c.arc(x, y, radius, 0, Math.PI * 2, false );
 c.strokeStyle = "pink";
 c.stroke();
if(x + radius > innerWidth || x - radius < 0){
 dx = -dx
 }
if(y + radius > innerHeight || y - radius < 0){
 dy = -dy
 }
 x += dx;
 y += dy;
} 
animate()
canvas.js
class Circle {
 constructor(x, y, dx, dy, radius){
 this.x = x;
 this.y = y;
 this.dx = dx;
 this.dy = dy;
 this.radius = radius
 }
draw() {
 c.beginPath();
 c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
 c.strokeStyle = "pink";
 c.stroke();
 }
update() {
 if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
 this.dx = -this.dx
 }
 if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
 this.dy = -this.dy
 }
this.x += this.dx;
 this.y += this.dy;
 this.draw();
}
}
let x = Math.random() * innerWidth;
let dx = (Math.random() - 0.5) * 10;
let y = Math.random() * innerHeight;
let dy = (Math.random() - 0.5) * 10;
let radius = Math.random() * 50;
const circle = new Circle(x, y, dx, dy, radius)
const animate = () => {
 requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight)
 circle.update()
}
animate()


canvas.js
....
const circleArray = []
for(let i = 0; i < 100; i++){
let radius = Math.random() * 50
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let dx = (Math.random() - 1.5) * 5
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dy = (Math.random() - 1.5) * 5
circleArray.push(new Circle(x, y, dx, dy, radius))
}
....
cavans.js
class Circle {
 constructor(x, y, dx, dy, radius){
 this.x = x;
 this.y = y;
 this.dx = dx;
 this.dy = dy;
 this.radius = radius;
 this.color = Math.floor(Math.random()*16777215).
 toString(16);
}
draw() {
 c.beginPath();
 c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
 c.fillStyle = `#${this.color}`;
 c.fill();
 c.strokeStyle = `#${this.color}`;
 c.stroke();
}
update() {
 if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
 this.dx = -this.dx
 }
 if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
 this.dy = -this.dy
 }
this.x += this.dx;
 this.y += this.dy;
this.draw()
}
}
const circleArray = [];
for(let i = 0; i < 100; i++){
 let radius = Math.random() * 50
 let x = Math.random() * (innerWidth - radius * 2) + radius;
 let dx = (Math.random() - 1.5) * 5
 let y = Math.random() * (innerHeight - radius * 2) + radius;
 let dy = (Math.random() - 1.5) * 5
circleArray.push(new Circle(x, y, dx, dy, radius))
}
const animate = () => {
 requestAnimationFrame(animate);
 c.clearRect(0, 0, innerWidth, innerHeight)
for(let i = 0; i < circleArray.length; i++){
 circleArray[i].update()
}
}
animate()



























   