//config rose
let tile1 = { x: 4, y: 2, z: 1 }
let tile2 = { x: 6, y: 1, z: 1 }
let tile3 = { x: 8, y: 1, z: 1 }
let tile4 = { x: 4, y: 4, z: 1 }
let tile5 = { x: 6, y: 5, z: 1 }
//algo detection colision
let matrix = []
matrix.push(tile1, tile2, tile3, tile4, tile5)

function hasLeft(tile, matrix) {
    let found = false;
    matrix.every(element => {
        if (element.x == tile.x - 2) {
            if ([tile.y + 1, tile.y, tile.y - 1].includes(tile.y)) {
                found = true
                return false // equivalent break
            }
        }
        return true
    });
    return found
}


function hasRight(tile, matrix) {
    let found = false;
    matrix.every(element => {
        if (element.x == tile.x + 2) {
            if ([tile.y + 1, tile.y, tile.y - 1].includes(tile.y)) {
                found = true
                return false // equivalent break
            }
        }
        return true
    });
    return found
}






function isFree(tile, matrix) {
    // on regarde les tile aux 4 coins et au dessus
    // un tile est libre si il n'a pas 2 voisins à gauche et à droite en même temps
    // + il n'a pas un tile au dessus

    // en pratique on regarde s'il y a u tile dans 3 mosition à gauche et 3 positions à droite
    if (hasLeft(tile, matrix) && hasRight(tile, matrix)) {
        return false
    }
    return true
}

let r = isFree(tile4, matrix)

console.log(r)
