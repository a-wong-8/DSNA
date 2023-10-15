// given points on a graph, return the closest k points to [0, 0]
var kClosest = function(points, k) {
    points.sort((a,b)=> (a[0]*a[0] + a[1]*a[1])-(b[0]*b[0] + b[1]*b[1]))

    return points.slice(0,k)
};

// console.log(kClosest([[1,3],[-2,2]], 1)); // Output: [[-2,2]]
// // Explanation: The distance between (1, 3) and the origin is sqrt(10).
// // The distance between (-2, 2) and the origin is sqrt(8).
// // Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// // We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Output: [[3,3],[-2,4]] -------------------------------------------------

