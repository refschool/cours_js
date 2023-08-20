let obj = {

    photographers: [
        { id: 1, nom: "jean" },
        { id: 2, nom: "jules" },
        { id: 3, nom: "hugo" }]
}

let tab = [5, 6, 7]
/*
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i])
}
tab.map((item) => {
    console.log(item)
})
*/

obj.photographers.map((item) => {

    console.log(item['nom'])
})