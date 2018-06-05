
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
     return [this.width, this.height]
  }
  draw(){
    console.log(`Drawing a Rectangle at:\n (x: ${this.getCoords()[0]}, y: ${this.getCoords()[1]})\nWith Dimension:\n width: ${this.getDims()[0]}, height: ${this.getDims()[1]}\nFilled with color: ${this.getColor()}`)
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
    console.log(`Drawing a Circle at:\n (x: ${this.getCoords()[0]}, y: ${this.getCoords()[1]})\nWith Dimension:\n radius: ${this.getRadius()}\nFilled with color: ${this.getColor()}`)
  }
}
let circle1 = new Circle("#fff", 50, 60, 255);
circle1.draw();
