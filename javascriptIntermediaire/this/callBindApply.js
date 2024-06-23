const person1 = {
    name: 'Paul',
    surname: 'Auchan',
    sayName: function () {
        return this.name + " " + this.surname;
    }
}

const person2 = {
    name: 'Justin',
    surname: 'News'
}

//console.log(person1.sayName.call(person2)); // le this sera le this de person2


const person3 = {
    name: 'Paul',
    surname: 'Auchan',
    sayName: function (ville) {
        return this.name + " " + this.surname + ', ' + ville;
    }
}
console.log(person3.sayName.call(person2, "Paris")); // le this sera le this de person2


//bind
const person4 = {
    name: 'Jules',
    surname: 'Sanchez',
    sayName: function () {
        return this.name + " " + this.surname
    }
}

const person5 = {
    name: 'Rudy',
    surname: 'Hess'
}

const sayPerson2Name = person1.sayName.bind(person2)

console.log(sayPerson2Name())