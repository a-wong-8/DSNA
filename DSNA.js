function robotInventory(log) {
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

function matrixRotate(matrix) {

}

console.log(matrixRotate([[1,2,3],[4,5,6],[7,8,9]]));