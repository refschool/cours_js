let tab = ["Amerique", "Europe", "Asie", "Afrique"]
const compareFn = (a, b) => {
    if (a.length < b.length) {
        return -1
    }
    if (a.length > b.length) {
        return 1
    }
    return 0
}
let trie = tab.sort(compareFn)
console.log(trie)