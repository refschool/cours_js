

function add(a, b, callback) {
    console.log(a + b)
    let e = { name: "yvon" }
    callback(e)

}


add(2, 3, function (e) {
    console.log("Je suis un callback", e.name)
})

