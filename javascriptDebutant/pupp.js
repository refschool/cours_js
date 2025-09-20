let liste_trier = []
let liste = [65, 14, 22, 1, 10, 9, 18, 71]

function getmax(liste) {
    var max = liste[0];
    for (i = 0; i < liste.length; i++)
        if (liste[i] > max) max = liste[i];
    return max;
}

let i = 0

while (i < 8) {
    console.log("i=", i)
    let max = getmax(liste);
    liste_trier.push(max)

    console.log(liste_trier)

    let index = liste.indexOf(max)

    console.log("index = ", index)

    liste.splice(index, 1)
    console.log(liste)
    i = i + 1;
    console.log("i=", i)
}

