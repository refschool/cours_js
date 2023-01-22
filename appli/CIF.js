

function repondre() {
    // détection du bouton flècher vers la droite
    var hackbtn = document.querySelectorAll('button')[1]


    // construction de l'événement à dispatcher
    var clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancellable: true,
        clientX: 32,
        clientY: 32,
    })

    // si on est en présence d'un questionnaire
    // détection bouton validation
    var validBtn = document.querySelector('.QCMv2ObjValidButton > button')

    if (validBtn != undefined) { //si on est en présence du QCM
        // détection de la réponse correcte
        var n = document.querySelectorAll('.QCMv2ObjRepItem')
        n.forEach(e => {
            let att = e.getAttribute('data-dui-reponse')

            if (att == "1") {
                var q = e.querySelector('.QCMv2ObjReponseCaseAnswer')
                // coche la checkbox ou le radio button
                q.checked = true
            }

            console.log(att)

        })
        // valide la réponse
        //validBtn.dispatchEvent(clickEvent)

    }
    // passe à la slide suivante
    hackbtn.dispatchEvent(clickEvent)


}

let handle = setInterval(repondre, 65000)