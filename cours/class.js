class Person {

    constructor(nom, prenom) {
        this.nom = nom
        this.prenom = prenom
    }

    show() {
        console.log('bonjour', this.nom, this.prenom)
    }


}


let p = new Person("Huynh", "Yvon")

p.show()