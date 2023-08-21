function robotInventory(log) {
    let inventory = {};
    
    log.map(arr => {
        if (arr[0] === 'supply') {
            inventory[arr[1]] = 1
        } else if (arr[0] === 'upgrade') {
            
        } else if (arr[0] === 'sell') {
            
        }
    })
    
    return inventory
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

console.log(robotInventory(logs)) // [100, 60, 60, 100]