let tab = [1, 2, 3, 4, 5, 6]
let initial = 0
let total = tab.reduce((acc, curr) => {
    return acc + curr
}, initial)
console.log(total)