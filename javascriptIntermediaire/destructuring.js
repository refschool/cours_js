// destructuration sert à piocher à dans un json plus facilement (apparu en 2015  Ecmascript 6)
let obj = { nom: "huynh", age: 48 }
//sans destructuration
//let age = obj['age']
//console.log(age)

//avec destructuration
//let { prenom } = obj

function test({ nom, age }) {
    console.log(nom, age)
}

//test(obj)

// destructuration de tableau
let tab = ["2", "yvon", () => { console.log("hello") }]
let [prenom, nombre, mafunc] = tab


//console.log(nombre, prenom, mafunc)


// useState
function useState(valeurInitiale) {
    let mafunc = () => { return "hello" }
    return ["Bonjour", () => { return "hello" }]
}

// destructuring
let [salutation, setSalutation] = useState("Bonsoir")
console.log(salutation, '+', setSalutation)