
class Shape {
  constructor (color, initX, initY) {
    this.color = color;
    this.x = initX;
    this.y = initY;
    }
  getColor(){
    return this.color;
  }
  setColor(val){
    this.color = val;
  } 
  getCoords() {
    return [this.x, this.y]
  }
  moveTo(newX, newY){
    this.x = newX;
    this.y = newY;
  }
}
class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super (color, initX, initY);
    this.width = initWidth;
    this.height = initHeight;
  }

  setWidth(newWidth){
    this.width = newWidth;
  }
  setHeight(newHeight) {
    this.height = newHeight;
  }
  getDims(){
     return (this.width, this.height)
  }
  draw(){
    console.log(`Drowing a Rectangle at:\n (x: ${this.x}, y: ${this.y})\nWith Dimantion:\n width: ${this.width}, height: ${this.height}\nFilled with color: ${this.color}`)
  }
}
let rectangle1 = new Rectangle("#f00", 10, 20, 30, 40);
rectangle1.draw()

class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super (color, initX, initY);
    this.radius = initRadius;
  }
  getRadius(){
    return this.radius
  }
  setRadius(val){
    this.radius = val;
  }
  draw(){
    console.log(`Drowing a Circle at:\n (x: ${this.x}, y: ${this.y})\nWith Dimantion:\n radius: ${this.radius}\nFilled with color: ${this.color}`)
  }
}
let circle1 = new Circle("#fff", 30, 40, 255);
circle1.draw();

