var clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancellable: true,
    clientX: 32,
    clientY: 32,
})

let t = document.querySelector('cpf-column-layout')
let next = t.nextSibling()


/**
 * https://www.moncompteformation.gouv.fr/espace-prive/html/#/
 * formation/recherche/results?
 * q=%7B%22ou%22:%7B%22modality%22:%22A_DISTANCE%22,%22type%22:%22CP%22,%22ville%22:null%7D,%22sort%22:%22SCORE%22,%22debutPagination%22:1,%22nombreOccurences%22:6,%22quoi%22:%22PYTHON%22,%22quoiReferentiel%22:null,%22contexteFormation%22:%22ACTIVITE_PROFESSIONNELLE%22%7D
 */