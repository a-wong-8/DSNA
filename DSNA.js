function robotInventory(log) { // roblox coding challenge q 1
    let inventory = {};
    const revenue = [];
    
    log.map(arr => {
        const transType = arr[0];

        if (transType === 'supply') {
            const robotName = arr[1];
            const count = parseInt(arr[2]);
            const price = parseInt(arr[3]);

            if (!inventory[arr[1]]) inventory[arr[1]] = [];

            inventory[robotName].push(...Array(count).fill(price));
        
        } else if (transType === 'sell') {
            const robotName = arr[1];
            const count = parseInt(arr[2]);
            let revenueFromSell = 0;

            if (inventory[robotName] && inventory[robotName].length >= count) {
                const prices = inventory[robotName].sort((a,b)=>a-b);
                for (let i = 0; i < count; i ++) {
                    revenueFromSell += prices.shift();
                }
                revenue.push(revenueFromSell);
                inventory[robotName] = prices;
            }

        } else if (transType === 'upgrade') {
            const robotName = arr[1];
            const count = parseInt(arr[2]);
            const oldPrices = parseInt(arr[3]);
            const newPrices =  parseInt(arr[4]);

            for (let i = 0; i < count; i++) {
                const oldPriceInd = inventory[robotName].indexOf(oldPrices);
                inventory[robotName][oldPriceInd] = newPrices            
            }
        }
    })
    return revenue
}

logs = [
    ['supply', 'robot1', '2', '100'],
    ['supply', 'robot2', '3', '60'],
    ['sell', 'robot1', '1'],
    ['sell', 'robot2', '1'],
    ['upgrade', 'robot2', '1', '60', '100'],
    ['sell', 'robot2', '1'],
    ['sell', 'robot2', '1']
]

// console.log(robotInventory(logs)) // [100, 60, 60, 100] -------------------------

function matrixRotate(matrix) { // cisco coding challenge q1
    row = matrix.length;
    col = matrix[0].length;
    final = new Array(col).fill(0).map(()=> new Array(row).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            final[j][row - 1 - i] = matrix[i][j]
        }
    }
    return final;
}

// console.log(matrixRotate([[1,2,3],[4,5,6],[7,8,9]])); // [7,4,1] [8,5,2] [9,6,3]
// console.log(matrixRotate([[6,4,1,3],[4,8,7,5],[1,12,9,6],[2,4,1,2]])); // [2,1,4,6] [4,12,8,4] [1,9,7,1] [2,6,5,3] -----------------------------------------

function minDiff(nums, sep) { // from roblox coding challenge q2
    final = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + sep; j < nums.length; j++) {
                final.push(Math.abs(nums[i]-nums[j]));
        }
    }
    min = Math.min(...final);       
    return min;
}

// console.log(minDiff([1,5,4,10,9], 3)); // 4 -------------------------------------
// console.log(minDiff([3,10,5,8], 1)); // 2

var isPalindrome = function(x) { // easy q from leetcode 
    a = x.toString().split('');
    if (parseInt(a.reverse().join('')) === x) return true 
    return false;
};

// console.log(isPalindrome(10)); // false 
// console.log(isPalindrome(121)); // true ------------------------------------------

function validParenthesis(str) { // easy stack q 
    stack = [];
    closeToOpen = {']': '[', '}': '{', ')': '('};

    for (let char of str) {
        const isBracket = (char in closeToOpen); // true if key is in hash 
        if (!isBracket) {stack.push(char); continue;} // if no key then push char 

        const isEqual = (stack[stack.length-1] === closeToOpen[char]); // checks if last item in stack is 
        if (isEqual) {stack.pop(); continue;}

        return false;
    }
    return (stack.length === 0);
}

function validParenthesis2(s, stack = [])
{
    if (s.length % 2 !== 0) return false;

    let brackets = {'(': ')', '[':']', '{':'}' };

    for (let char of s) {
        if (char in brackets) {
            stack.push(char);
        } else {
            if ((char === ')' && stack[stack.length-1] === '(') ||
            (char === '}' && stack[stack.length-1] === '{') ||
            (char === ']' && stack[stack.length-1] === '[')) {
                stack.pop();
            } else {
                return false; 
            }
        }
    }
    return stack.length === 0;
}

// console.log(validParenthesis('[]{}()')); // true 
// console.log(validParenthesis('[{()}]')); // true 
// console.log(validParenthesis('[(])')); // false ----------------------------------

// console.log(validParenthesis2('[]{}()')); // true 
// console.log(validParenthesis2('[{()}]')); // true 
// console.log(validParenthesis2('[(])')); // false ----------------------------------

var searchRange = function(nums, target) {
    // use b search for log n runtime
        // use start and end pointers 
        // if mid > target, end pointer changes to mid - 1
        // if mid < target, change starter to mid + 1
    // check if mid === target 
        // if so check adjacent ind 
        // store ind in results arr 

    function binSearch(start) { // not done
        // start will be a boolean that determines if we are looking for the starting point or ending point 
        let res = [-1,-1];
        let left = 0;
        let right = nums.length-1;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            
            if (target > nums[mid]) {
                left = mid + 1
            } else if (target < nums[mid]) {
                right = mid - 1
            } else { // target === mid -- need to figure out this else 
                if (start && nums[mid-1]===target) {
                    right = mid - 1;
                } else {

                }
            }
        }
    }
    // rgiht = binsearch(false)
    // left = binsearch(true)
    // return [left, right]
        
};

// console.log(searchRange([5,7,7,8,8,10], 8)); // [3,4]
// console.log(searchRange([5,7,7,8,8,10], 6)); // [-1,-1]
// console.log(searchRange([], 0)); // [-1,-1] -------------------------------------


function addTwoNum(l1, l2) { // not done 
    list1 = parseInt(l1.join(''));
    list2 = parseInt(l2.join(''));

    let final = list1 + list2 
    let ans = []
    // for (let num of final) {
    //     ans.push(num)
    // }

    return final
}

// console.log(addTwoNum([2,4,3], [5,6,4])); // [7,0,8]
// console.log(addTwoNum([0], [0])); // [0]
// console.log(addTwoNum([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1] -------------------------

var bSearchRotated = function(nums, target) { // not done
    if (nums.length === 0 && nums[0] !== target) return -1;

    let mid = Math.floor(nums.length/2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid+1);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
        return bSearchRotated(left, target)
    } else if (nums[mid] < target) {
        let stack = bSearchRotated(right, target)
        if (stack === -1) return -1
        return stack + mid + 1
    }
};

// console.log(bSearchRotated([4,5,6,7,0,1,2], 0)); // 4
// console.log(bSearchRotated([4,5,6,7,0,1,2], 3)); // -1
// console.log(bSearchRotated([1], 0)); // -1 ---------------------------------------------------------

function evaluateReversePolishNotation(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
         if (tokens[i] == '+') {
            let sec = stack.pop()
            let fir = stack.pop()
            stack.push(sec + fir)
        } else if (tokens[i] == '-') {
            let sec = stack.pop()
            let fir = stack.pop()
            stack.push(fir - sec)
        } else if (tokens[i] == '*') {
            let sec = stack.pop()
            let fir = stack.pop()
            stack.push(sec * fir)
        } else if (tokens[i] == '/') {
            let sec = stack.pop()
            let fir = stack.pop()
            stack.push(Math.trunc(fir/sec))
        } else {
            stack.push(Math.trunc(tokens[i]))
        }
    }
    return stack[0]
}

// console.log(evaluateReversePolishNotation(["2","1","+","3","*"])); // 9
// console.log(evaluateReversePolishNotation(["4","13","5","/","+"])); // 6 -------------------------------------------

var bSearch = function(nums, target) {
    if (nums.length === 0) return -1;

    let mid = Math.floor(nums.length/2);
    let left = nums.slice(0,mid);
    let right = nums.slice(mid+1);
    
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
        return bSearch(left, target)
    } else if (nums[mid] < target) {
        let stack = bSearch(right, target)
        if (stack === -1) return -1
        return stack + mid + 1
    }

};

// console.log(bSearch([-1,0,3,5,9,12], 9)); // 4
// console.log(bSearch([-1,0,3,5,9,12], 2)); // -1 ------------------------------------------------------------

var searchMatrix = function(matrix, target) {
    rows = matrix.length; // 3
    cols = matrix[0].length; // 4

    top = 0; // top pointer = 0
    bottom = rows - 1; // bottom pointer = 2

    while (top <= bottom) {
        row = top + Math.floor((bottom-top)/2); // 0 + 1 = 1

        if (target > matrix[row][cols-1]) { // [1][3] checks middle row last item 
            top = row + 1 // = 2 
        } else if (target < matrix[row][0]) { // [1][0] checks mid row first item 
            bottom = row - 1 // = 0
        } else {
            break;
        }
    }
    
    if (top > bottom) return false;
    
    row = top + Math.floor((bottom - top) / 2);

    left = 0;
    right = cols-1;

    while (left <= right) {
        mid = left + Math.floor((right-left)/2)

        if (target > matrix[row][mid]) {
            left = mid + 1
        } else if (target < matrix[row][mid]) {
            right = mid - 1
        } else {
            return true 
        }
    }
    return false 
};

// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false --------------------------------

var minEatingSpeed = function(piles, h) {
    
};

// console.log(minEatingSpeed([3,6,7,11], 8)); // 4
// console.log(minEatingSpeed([30,11,23,4,20], 5)); // 30
// console.log(minEatingSpeed([30,11,23,4,20], 6)); // 23 ----------------------------------------------------------

function lastWord(str) {
    str = str.split(' ').reverse();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '') {
            str.splice(i,1)
            i--
        }
    }
    return str[0]
}

// console.log(lastWord('  hello world  '));
// console.log(lastWord('hello world')); -----------------------------------------------------------------

function oneNum(nums) {
    let obj = {};
    for (let ele of nums) {
        if (!obj[ele]) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }
    }

    for (let ele of nums) {
        if (obj[ele] === 1) return ele
    }
    return 'none';
}

// console.log(oneNum([1,2,2])); // 1
// console.log(oneNum([0,0,0])); // none
// console.log(oneNum([1,1,2])); // 2 ----------------------------------------------------------------------------------


// Write a recursive function that returns all of the permutations of an array
// (A permutation is a possible ordering of the elements in an array)
// e.g. permutations([1,2]) => [[1,2], [2,1]]
// e.g. permutations([1,2,3]) => [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

function permutations(array) {
    if (array.length <= 1) return [array];

    const result = [];
    const first = array[0];
    let rest = array.slice(1);
    const prevPerms = permutations(rest);

    prevPerms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
        let nextPerm = [...perm.slice(0, i), first, ...perm.slice(i)]; // inserts first at i index  
        result.push(nextPerm);
        }
    });

    return result;
}

console.log(permutations([1,2])); // [[1,2], [2,1]]
console.log(permutations([1,2,3])); // [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
console.log(permutations(['a','b','z']));

// --------------------------------------------------------------------

function permutationInString(s1, s2) {
    if (s1.length > s2.length) return false;
    const count = new Array(26).fill(0);

    let alpha = '-abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s1.length; i++) {
        // count[s1.charCodeAt(i)-97]++;
        // count[s2.charCodeAt(i)-97]--;
        count[alpha.indexOf(s1[i])]++
        count[alpha.indexOf(s2[i])]--

        if (count.every(a=> a === 0)) return true;
    }

    for (let i = s1.length; i < s2.length; i++) { // s2 len is 8
        // count[s2.charCodeAt(i)-97]--;
        // count[s2.charCodeAt(i-s1.length)-97]++;
        count[alpha.indexOf(s2[i])]--; // 2, 3, 4, 5, ... 8
        count[alpha.indexOf(s2[i-s1.length])]++; // 2-2=0 / 3-2=1 / 4-2 =2 / 5-2=3 / 6-2=4 / 7-2=5 / 8-2=6
        
        if (count.every(a=> a === 0)) return true;
    }

    return false
}
// count : a+1 b+1 e-1 i-1, 
// d-1 b0 a0 o-3
// e0 i0 d0 b1 a1 o0 -- checks if all 0 every iteration of loop 

// console.log(permutationInString("ab", "eidboaoo")); // false
// console.log(permutationInString("ooo", "eidboaoo")); // false
// console.log(permutationInString("ab", "eidbaooo")); // true // Explanation: s2 contains one permutation of s1 ("ba") ------------------------------------

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
var canJump = function(nums) {
    let lastInd = nums.length-1

    for (let i = nums.length; i >=0; i--) {
        if (i + nums[i] >= lastInd) lastInd = i
    }

    return lastInd === 0
};

// console.log(canJump([2,3,1,1,4])); // true - Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// console.log(canJump([3,2,1,0,4])); // false -----------------------------------------------------------------------------------------------------