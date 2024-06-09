var longueur = 1
var largeur = 1

function aireRectangle(long, larg) {
    debugger
    let aire = (long * larg)
    console.log(" Le terrain à une longueur de " + long + "m et une largeur de " + larg + "m, et une surface de " + aire + "m².")
    longueur = longueur + 2
    largeur = largeur + 1
    return
}

setInterval(aireRectangle, 1000, longueur, largeur)