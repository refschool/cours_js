class User {
    constructor(nom, prenom, data) {
        this.nom = nom;
        this.prenom = prenom;
        this.data = data;
    }

}

let user1 = new User()
user1.nom = "Huynh"
user1.prenom = "Yvon"
fetch(url).then().then(
    data => { user1.data = data }
)
