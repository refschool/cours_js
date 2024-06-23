const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};

//console.log(person.getThis())

function test() {
    console.log('this in a function', this);
}

const test2 = () => {
    console.log('this in arrow function', this);

}
test2() // undefined
test() // objet Window
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
obj1.test = test
obj2.test2 = test2
console.log(obj1.test()) // this est l'objet obj1
console.log('arrow ', obj2.test2()) // this est l'objet Window