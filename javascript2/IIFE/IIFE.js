// https://flaviocopes.com/javascript-iife/
//Function declarations want a name, while function expressions do not require it.

(function () {
    setTimeout(() => {
        console.log('premier')
    }, 2000)
})

    (function () {
        setTimeout(() => {
            console.log('deuxieme')
        }, 1000)
    })