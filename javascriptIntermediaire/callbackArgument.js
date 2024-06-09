function cuisiner(callback) {
    console.log(arguments)
    console.log("je cuisine")
    if (callback && typeof callback === "function") {
        callback(arguments[1])
    }
}

function callback(a, b) {
    console.log("je suis dans la callback")
    if (a) {
        console.log("je suis dans la callback avec ", a)
    }
}

cuisiner(callback, 'toto')










