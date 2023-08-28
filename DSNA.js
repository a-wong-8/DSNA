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

// console.log(robotInventory(logs)) // [100, 60, 60, 100]

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
// console.log(matrixRotate([[6,4,1,3],[4,8,7,5],[1,12,9,6],[2,4,1,2]])); // [2,1,4,6] [4,12,8,4] [1,9,7,1] [2,6,5,3]

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

// console.log(minDiff([1,5,4,10,9], 3)); // 4
// console.log(minDiff([3,10,5,8], 1)); // 2

var isPalindrome = function(x) {
    a = x.toString().split('');
    if (parseInt(a.reverse().join('')) === x) return true 
    return false;
};

console.log(isPalindrome(10)); // false 
console.log(isPalindrome(121)); // true 