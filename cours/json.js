let employe1 = {
    nom: "Dupont",
    prenom: "Jean",
    age: 34,
    diplome: ["brevet", "BAC E", "Ingénieur"],
    adresse: {
        numero: 14,
        rue: "Tibet",
        ville: "Toulouse"
    },
    ecoles: [
        {
            nomEcole: "college Jules Verne",
            ville: "Thion"
        },
        {
            nomEcole: "Lycée Thiers",
            ville: "Marseille"
        }],
    parler: function () { console.log("Bonjour") },
    rire() { console.log("Je ris") } // depuis EcmaScript6 apparue en 2015
}


//console.log(employe1.ecoles[0].nomEcole)
employe1.parler()