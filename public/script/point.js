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
        const lineStart = line.start;
        const lineEnd = line.end;

        const dxc = point.x - lineStart.x;
        const dyc = point.y - lineStart.y;
        const dxl = lineEnd.x - lineStart.x;
        const dyl = lineEnd.y - lineStart.y;

        const cross = dxc * dyl - dyc * dxl;
        if (cross != 0) {
            return false;
        }

        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? 
                lineStart.x <= point.x && point.x <= lineEnd.x :
                lineEnd.x <= point.x && point.x <= lineStart.x;
        }
        else {
            return dyl > 0 ? 
                lineStart.y <= point.y && point.y <= lineEnd.y :
                lineEnd.y <= point.y && point.y <= lineStart.y;
        }
    }
}