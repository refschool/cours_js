function test() {
    console.log('dans la callback')
}
function test2() {
    console.log('dans test 2')
}

//setTimeout(test, 0) // fonction asynchrones
//setTimeout(test2, 0) // fonction asynchrones
//console.log("Je suis tout seul") // fonction synchrones

//fonction callback  avec l'objet xhr
function principale(callback) {
    console.log("je suis dans la fonction principale")
    callback()
}

principale(test)

//promesse
let resultatFB = fetch(urlfacebook).then(response => response.json()).then(data => {
    console.log(data)

    fetch(urlgoogle).then(response => response.json()).then(data => {
        console.log(data)

    })
})



//async await

async function getFacebook() {
    return a
}

async function getGoogle() {

}

let resultat = await getfacebook()
let resultat2 = await getGoogle(resultat)