// EventTarget a une méthode dispatchEvent
//debugger
this.addEventListener('toto', (e) => {
    console.log("toto detail reçu")
})




var myEventTarget = new EventTarget();
let e = new Event("toto"); e.detail = "Titi"

myEventTarget.addEventListener('toto', (e) => {
    console.log("toto detail reçu")
})


setTimeout(() => {
    myEventTarget.dispatchEvent(e)
}, 1000);
