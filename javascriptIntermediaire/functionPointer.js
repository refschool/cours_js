function sayHello(){
    console.log('Bonjour')
}

function test(callback){
    //code à exécuter
    console.log('Hello juste avant le callback')
    callback()
}
console.log(sayHello)
// la fonction est un type comme les tableau, string, boolean, number

// test(() => {
//     console.log('Bonjour')
// })