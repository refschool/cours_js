let temperature = 0

fetch(url).then(response => response.json)
    .then(data => {
        temperature = data.temperature
        console.log(temperature) //10
    })

console.log(temperature) // 0