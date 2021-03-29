let tab = ["Jean", "Julie", "Jacques"] // valeurs tab.length = taille du tableau
//0  1  2  3  4  // index i


for (let i = 0; i < tab.length; i++) {
    console.log(tab[i])
}

debugger
for (let i = 0; i < 5; i = i + 1) {
    console.log(i)
}

debugger
for (let i = 10; i > 0; i = i - 1) {
    console.log(i)
}


for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(i)
}