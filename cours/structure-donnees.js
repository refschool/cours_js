/*
1-Reconnaitre la structure (tableau, objet, chaine, nombre...)
2-Visualiser la structure mentalement
3-savoir avec la boucle FOR parcourir les tableaux de
 par pas de 1, 2 voire plus, 
du plus petit au plus grand et inversément
*/

let var1 = [10, 20, 30, 40, 50, 60, 70]
let var2 = [
    "Toto", // élément accessible par var2[0]
    "Jean", //var2[1]
    "Dupont" //var2[2]
]

// tableau d'objets
let var3 = [
    { nom: "Jean", age: 23 }, // var3[0]
    { nom: "Sophie", age: 30 }, // var3[1]
    { nom: "Jacques", age: 12 } // var3[2]
]

//tableau de tableaux
let var4 = [
    ["Renault", "Peugeot"], //var4[0]     
    ["Audi", "BMW"], //var4[1]
    ["Fiat", "Ferrari"] //var4[2]
]

let obj = { nom: "Jean", age: 23 }
// console.log(obj.nom)
let propriete = 'age'
// console.log(obj[propriete])// plus flexible

debugger
for (let i = 0; i < 5; i++) {
    console.log(i)
}

//Amazon
let historiqueCommandes = [
    { photo: "coq.jpg", prix: 59, dateCommande: '', dateLivraison }, // var3[0]
    { nom: "Sophie", age: 30 }, // var3[1]
    { nom: "Jacques", age: 12 } // var3[2]
]
































