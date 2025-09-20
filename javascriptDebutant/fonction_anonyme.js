function test() {
    console.log('1er type de déclaration ')
}


let test2 = function () {
    console.log('2eme type de déclaration')
}
//test("Yvon")
setTimeout(test2, 1000)
//setTimeout(test, 3000)


//setInterval(,1000)
// fonction anonyme
/*setTimeout(function () {
    console.log('fonction anonyme !')
}, 1000)*/