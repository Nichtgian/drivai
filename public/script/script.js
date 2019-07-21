const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

let p = new Polygon([
  new Point(100, 150),
  new Point(300, 350),
  new Point(350, 350),
  new Point(150, 250),
  new Point(350, 200),
  new Point(150, 40)
]);

console.log(p.unsorted);
console.log(p.points);

p.draw(CTX);
