function fusee() {
    console.log("la fusée est arrivée")
}

function lievre() {
    console.log("le lièvre est arrivé")
}

setTimeout(fusee, 0);//async
setTimeout(lievre, 0);// async
//setInterval, fetch

console.log('La tortue est arrivée');// synchrone