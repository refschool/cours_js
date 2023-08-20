
class Media {
    cssClass;
    alt;
}

class Video extends Media {
    codec;
}

class Image extends Media {

    extension;
}

class MediaFactory {
    static createMedia(type) {
        if (type == 'image') {
            return new Image()
        }
        if (type == 'video') {
            return new Video()
        }
    }


}

// objMedia = MediaFactory.createMedia(json[i].type)
// console.log(objImage)

//destructuration
let data = {
    nom: "Dupont",
    age: 35,
    city: "Paris"
}
// sans destructuration
// let nom = data.nom
// let age = data.age
// let ville = data.city

// avec destructuration
let { nom, age, city } = data
console.log(" M " + nom + " a " + age + " ans et habite " + city)

a = 'r'
if (a == 'toto' || a == 'titi' || a == 'tata') {

    //
}

if (['tata', 'titi', 'toto'].includes(a))

    //early return

    function test(a) {
        //80%
        if (a == false) {
            return
        }
        // 20%
        //faire le calcul
        //
        return 'r'

    }
// pas de if else is pas besoin ROBERT MARTIN Clean Code
function test2(a) {
    if (a == 'r') {
        //
    } else {
        // a != 'r'
        //
    }
}