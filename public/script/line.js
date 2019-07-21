class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
        ctx.closePath();
    }

    getIntersectionPointWith(b) {
        return Line.getLinesIntersectionPoint(this, b);
    }

    static getLinesIntersectionPoint(a, b) {
        const a1 = a.end.y - a.start.y;
        const b1 = a.start.x - a.end.x;
        const c1 = a1 * (a.start.x) + b1 * (a.start.y);

        const a2 = b.end.y - b.start.y;
        const b2 = b.start.x - b.end.x;
        const c2 = a2 * (b.start.x) + b2 * (b.start.y)

        const d = a1 * b2 - a2 * b1;
        if (d == 0) {
            return Infinity;
        }

        const intersectX = (b2 * c1 - b1 * c2) / d;
        const intersectY = (a1 * c2 - a2 * c1) / d;

        return new Point(intersectX, intersectY);
    }

    doesLineIntersect(b) {
        return Line.doLinesIntersect(this, b);
    }

    static doLinesIntersect(a, b) {
        let point = Line.getLinesIntersectionPoint(a, b);

        if (point == Infinity) {
            return false;
        }

        return point.isOnLine(a) &&
            point.isOnLine(b);
    }
}
