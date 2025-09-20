/*let temperature = 0

fetch(url).then(response => response.json)
    .then(data => {
        temperature = data.temperature
        console.log(temperature) //10
    })

console.log(temperature) // 0

*/

//  setInterval(func,delai)

let secondes = 0

function displaySeconde() {
    if (secondes > 7) {
        clearInterval(handle);
    }
    secondes = secondes + 1
    console.log("Nombre de secondes écoulées : ", secondes);
}


let handle = setInterval(displaySeconde, 1000)


