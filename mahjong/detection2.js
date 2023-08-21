/*
//config verte


//algo detection colision
let matrix0 = []
let matrix1 = []
matrix0.push(tile101, tile102, tile103, tile104, tile105, tile106, tile107, tile108, tile109, tile110)
matrix1.push(tile1, tile2, tile3, tile4, tile5)
let matrixArray = [matrix0, matrix1]
*/
function hasLeft(tile, matrix) {

    let found = false;
    matrix.every(element => {
        if (element.data.x == tile.data.x - 2) {
            if ([element.data.y + 1, element.data.y, element.data.y - 1].includes(tile.data.y)) {
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
        if (element.data.x == tile.data.x + 2) {
            if ([element.data.y + 1, element.data.y, element.data.y - 1].includes(tile.data.y)) {
                found = true
                return false // equivalent break
            }
        }
        return true
    });
    return found
}

// check avec un niveau supérieur
function hasTopCenter(tile, matrix) {
    // TODO : check niveau de matrix > niveau de tile
    let found = false;
    matrix.every(element => {
        if (element.data.x == tile.data.x) {
            if ([element.data.y + 1, element.data.y, element.data.y - 1].includes(tile.data.y))
                found = true;
            return false;
        }
        return true;
    })

    return found;
}

function hasTopLeft(tile, matrix) {
    let found = false;
    matrix.every(element => {
        if (element.data.x == tile.x - 1) {
            if ([element.data.y + 1, element.data.y, element.data.y - 1].includes(tile.data.y)) {
                found = true
                return false // equivalent break
            }
        }
        return true
    });
    return found
}

function hasTopRight(tile, matrix) {
    let found = false;
    matrix.every(element => {
        if (element.x == tile.x + 1) {
            if ([element.data.y + 1, element.data.y, element.data.y - 1].includes(tile.data.y)) {
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

function isFreeAbove(tile, matrix) {
    // en pratique on regarde s'il y a u tile dans 3 mosition à gauche et 3 positions à droite
    if (hasTopLeft(tile, matrix) || hasTopRight(tile, matrix) || hasTopCenter(tile, matrix)) {
        return false
    }
    return true
}
// test if the tile is clearable
function isClearable(tile, matrixArray) {
    // TODO: if (tile.z == 0)  => matrixArray[1]
    let tileIsFree = isFree(tile, matrixArray[tile.data.z])
    let tileIsFreeAbove = null
    if (matrixArray[tile.data.z + 1] !== undefined) {
        tileIsFreeAbove = isFreeAbove(tile, matrixArray[tile.data.z + 1])
    } else {
        tileIsFreeAbove = true
    }
    return tileIsFree && tileIsFreeAbove
}

// oublié de faire hasTop et hasBottom
//let r = isClearable(tile105, matrixArray)
