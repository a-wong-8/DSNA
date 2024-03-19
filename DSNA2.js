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

function bSearchRotatedSortedArr (nums, target) {
    if (nums.length === 0) return -1;

    let left = 0;
    let right = nums.length-1;

    while (left <= right) {
        let mid = Math.floor((left+right) / 2);

        if (nums[mid] === target) return mid;
    
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid -1
            } else {
                left = mid +1
            }

        } else {

            if (nums[mid] < target && target <= nums[right]) {
                left = mid+1    
            } else {
                right = mid-1
            }
        }
    }
    return -1
}

// console.log(bSearchRotatedSortedArr([4,5,6,7,0,1,2], 0)); // Output: 4
// console.log(bSearchRotatedSortedArr([4,5,6,7,0,1,2], 3)); // Output: -1
// console.log(bSearchRotatedSortedArr([1], 0)); // Output: -1
// -----------------------------------------------------------------------------------

// Palindrome Permutation: Given in the check if it is a permutation of a palindrome
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is an rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input:
// tact coa
// Output: True (permutations: "taco cat", "atco cta", etc.)

// Given a string, determine if a permutation of the string could form a palindrome. <-- better question

var permute = function(str) {
    let obj = {};
    str = str.replace(/\s/g, ''); // removes space from string 

    for (let i =0; i<str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
    }

    let odds = 0;
    for (let ele in obj) {
        if (obj[ele] % 2 !== 0) odds +=1; // palidrome can only have one odd letter 
    }

    if (odds > 1) return false;
    return true;
};

console.log(permute('oact cta')); // true
console.log(permute('code')); // false
console.log(permute("aab")); // true
console.log(permute('care rac')); // true