let obj = {
    age: 34,
    prenom: "Jean",
    nom: "Dupont"
}

for (let cle in obj) {
    console.log("cle=", cle)
    console.log(cle, ":", obj[cle])
}