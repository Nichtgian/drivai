class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceToPoint(b) {
        return Point.calculateDistanceBetween(this, b);
    }

    static calculateDistanceBetween(a, b) {
        return Math.sqrt(
            Math.pow(a.x - b.x, 2) +
            Math.pow(a.y - b.y, 2)
        );
    }

    isOnLine(line) {
        return Point.isPointOnLine(this, line);
    }

    static isPointOnLine(point, line) {
        const lineS = line.start;
        const lineE = line.end;

        const aX = point.x - lineS.x;
        const aY = point.y - lineS.y;
        const bX = lineE.x - lineS.x;
        const bY = lineE.y - lineS.y;

        const c = aX * bY - aY * bX;
        if (c != 0) {
            return false;
        }

        if (Math.abs(bX) >= Math.abs(bY)) {
            return bX > 0 ? lineS.x <= point.x && point.x <= lineE.x : lineE.x <= point.x && point.x <= lineS.x;
        }
        return bY > 0 ? lineS.y <= point.y && point.y <= lineE.y : lineE.y <= point.y && point.y <= lineS.y;
    }
}
