
//ajax

let url = "https://domaine.com/api/product/1025"
fetch(url, { option })
    .then(response => response.json())
    .then(data => console.log(data))
//JSON

data = [
    {
        nom: "Huynh",
        age: 42,
        ville: "Toulouse"
    },
    {
        nom: "Huynh",
        age: 42,
        ville: "Toulouse"
    }
]