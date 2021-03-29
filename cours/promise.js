//https://www.youtube.com/watch?v=s6SH72uAn3Q
//https://www.youtube.com/watch?v=DHvZLI7Db8E

//let promiseToGiveForecast = new promise

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 3) {

        resolve('Success')  // the method resoleve return a Promise
    } else {
        console.log(reject)
        reject('Failed') // returns a Promise
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch(error => console.log('This is in the catch ' + error))