function retour() {
    return 'le retour'
}

function principale(toto) {
    let r = toto()
    console.log('dans fonction principale' + r)
}

principale(retour)


