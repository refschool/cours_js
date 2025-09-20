for (let i = 0; i < 101; i = i + 1) {
    // cas du i divisible par 3 et 5 en même temps
    // i = 15
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " fizzbuzz")
    }
    else {
        // cas du i pas divisible par 3 et 5 en  même temps
        if (i % 3 == 0) {
            console.log(i + " fizz")
        }

        if (i % 5 == 0) {
            console.log(i + " buzz")
        }
    }


}