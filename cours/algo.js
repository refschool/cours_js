let tab = [21, 11, 45, 18, 79, 14]

function getMin(tab) {
    //chercher le minimum et assigner à PlusPetit
    let PlusPetit = tab[0]
    for (let i = 0; i < tab.length; i = i + 1) {
        if (PlusPetit > tab[i]) {
            PlusPetit = tab[i]
        }
    }
    return PlusPetit
}


// // classer du plus petit au plus grand
let tabOrdonne = []
// for (let i = 0; i < tab.length; i++) {
while (tab.length > 0) {
    let min = getMin(tab)
    console.log('tab', tab)
    tabOrdonne.push(min)
    // enlever à tab le minimal
    let index = tab.indexOf(min)

    tab.splice(index, 1)
    console.log(tab)
    //enlever l'élément à l'index min

}
console.log(tabOrdonne)
