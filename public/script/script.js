const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

let l1 = new Line(new Point(0, 50), new Point(100, 50));
let l2 = new Line(new Point(50, 0), new Point(50, 100));

l1.draw(CTX);
l2.draw(CTX);

CTX.stroke();
