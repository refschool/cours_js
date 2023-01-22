let h = document.querySelector('#renseignement')
let resultat = document.querySelector('#resultat-imc')
let commentaire = document.querySelector('.commentaire')


h.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(poids)

    poids = document.querySelector("#poids").value

    taille = document.querySelector("#taille").value

    tailleEnM = taille / 100

    let imc = Math.trunc(poids / (tailleEnM * tailleEnM))

    resultat.innerText = imc


    if (imc < 18) {
        commentaire.innerText = 'vous devriez manger un peu plus!! direction les fasfood 🍕 🌭 🍟'

    } else if (imc >= 19 && imc < 25) {

        commentaire.innerText = 'rien à signaler continuer comme ça 🎖️🎖️🎖️🎖️'
    } else if (imc >= 26 && imc < 30) {

        commentaire.innerText = `Vous etes en surpoids, vous devriez faire de l'activité physique 🚴 🏊`
    } else {

        commentaire.innerText = `Il est grand temps de se bouger le Q, fini les 🍕 🌭 🍟 et bienvenue aux 🥦 🥕 🍈 🍐 et go les activités physique 🚴 🏊`
    }

})



























