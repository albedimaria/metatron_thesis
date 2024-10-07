const findIntersectionPoint = (A, B, C, D) => {
    const x1 = A.x, y1 = A.y;
    const x2 = B.x, y2 = B.y;
    const x3 = C.x, y3 = C.y;
    const x4 = D.x, y4 = D.y;

    const det = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (det === 0) {
        // Lines are parallel or coincident
        return null;
    }

    const t1 = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / det;

    const intersectionPoint = {
        x: x1 + t1 * (x2 - x1),
        y: y1 + t1 * (y2 - y1),
        z: 0, // Assuming this is a 2D intersection in the plane z = 0
    };

    return intersectionPoint;
};

export default findIntersectionPoint