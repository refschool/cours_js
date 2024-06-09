//HACK : /http://www.backalleycoder.com/2012/04/25/i-want-a-damnodeinserted/


function simulateClick() {
    let titre = document.querySelector('h1')

    let clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancellable: true,
        /*    offsetX: 20,
            offsetY: 20,*/
    })

    console.log('elem ', titre)
    console.log('dispatch')
    titre.dispatchEvent(clickEvent)
    console.log('clicked')


    // titre.addEventListener('click', function (e) {

    //     console.log('offsetX ', e.offsetX, 'offsetY ', e.offsetY) // relatif à l'élément cliqué
    //     //     console.log('clientX ', e.clientX, 'clientY ', e.clientY) //coordonnées locale du DOM
    //     //     console.log('pageX ', e.pageX, 'pageY ', e.pageY) // relatif au document entier
    //     //     console.log('screenX ', e.screenX, 'screenY ', e.screenY) // relatif à l'écran
    // })

}

let h2 = document.querySelector('h1').addEventListener('click', function (e) {
    alert('toto')
})

setTimeout(simulateClick, 300)




/**
 * https://www.moncompteformation.gouv.fr/espace-prive/html/#/
 * formation/recherche/results?
 * q=%7B%22ou%22:%7B%22modality%22:%22A_DISTANCE%22,%22type%22:%22CP%22,%22ville%22:null%7D,%22sort%22:%22SCORE%22,%22debutPagination%22:1,%22nombreOccurences%22:6,%22quoi%22:%22PYTHON%22,%22quoiReferentiel%22:null,%22contexteFormation%22:%22ACTIVITE_PROFESSIONNELLE%22%7D
 */