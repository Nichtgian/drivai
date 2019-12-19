class Polygon {
  constructor(points = []) {
    this.unsorted = points.slice();
    this.boundingBox = Polygon.getBoundingBox(points);
    this.points = Polygon.orderPoints(points, this.boundingBox.center);
  }

  draw(ctx) {
    this.points.forEach((point) => {
      point.draw(ctx, 2);
    });

    for (let i = 0; i < this.points.length; i++) {
      let s = this.points[i];
      let e = this.points[i+1 >= this.points.length ? 0 : i+1];
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(e.x, e.y);
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }
    ctx.lineWidth = 1;

    for (let i = 0; i < this.unsorted.length; i++) {
      let s = this.unsorted[i];
      let e = this.unsorted[i+1 >= this.unsorted.length ? 0 : i+1];
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(e.x, e.y);
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();
    }

    this.drawBoundingBox(ctx);
  }

  drawBoundingBox(ctx) {
    const b = this.boundingBox;
    ctx.beginPath();
    ctx.rect(
      b.min.x,
      b.min.y,
      b.max.x - b.min.x,
      b.max.y - b.min.y);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.closePath();
  }

  static orderPoints(points, centerPoint) {
    if (points.length <= 2) {
      throw "A Polygon (atleast 3 Points) is required!";
      return false;
    }

    return points.sort((a, b) => {
      return Math.atan2(a.y - centerPoint.y, a.x - centerPoint.x) -
        Math.atan2(b.y - centerPoint.y, b.x - centerPoint.x);
    });
  }

  static getBoundingBox(points) {
    let min = new Point(Number.MAX_VALUE, Number.MAX_VALUE);
    let max = new Point(0, 0);

    if (points.length <= 2) {
      throw "A Polygon (atleast 3 Points) is required!";
      return false;
    }

    points.forEach((point) => {
      if (point.x < min.x) min.x = point.x;
      if (point.y < min.y) min.y = point.y;
      if (point.x > max.x) max.x = point.x;
      if (point.y > max.y) max.y = point.y;
    });

    const center = new Point(
      (min.x + max.x) / 2,
      (min.y + max.y) / 2);

    return {
      min: min,
      max: max,
      center: center
    }
  }
}
