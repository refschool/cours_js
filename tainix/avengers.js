// NE PAS TOUCHER
const ironman = 3;
const spiderman = 9;
const captainamerica = 9;
const thor = 9;
const thanos = 377;
// NE PAS TOUCHER
let heroes = [ironman, spiderman, captainamerica, thor]
let total = 0
let tour = 1

function get_power(heroes, total) {
    total = heroes[0] * 3 + 10 + heroes[1] * 4 + 5 + heroes[2] * 3 + 7 + heroes[3] * 4 + 20
    console.log(total)
    return total
}


while (true) {

    let index = tour % 4
    heroes[index] = heroes[index] + 1
    total = get_power(heroes, total)
    if (total > thanos) {
        console.log(tour)
        break
    }
    tour++;
}

