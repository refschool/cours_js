//https://www.theodinproject.com/lessons/node-path-javascript-async-and-await
const server = {
    people: [
        {
            name: "Odin",
            age: 20,
        },
        {
            name: "Thor",
            age: 35,
        },
        {
            name: "Freyja",
            age: 29,
        },
    ],
    getPeople() {
        return new Promise((resolve, reject) => {
            // Simulating a delayed network call to the server
            setTimeout(() => {
                resolve(this.people);
            }, 2000);
        });
    },
};

function getPersonsInfo(name) {
    return server.getPeople().then(people => {
        return people.find(person => { return person.name === name });
    });
}

async function getPersonsInfo2(name) {
    const people = await server.getPeople(); // si on est en function classique sans async/await, people.find renverra people.find is not a function
    const person = people.find(person => { return person.name === name });
    return person;
}

// let g = getPersonsInfo('Odin')
let person = getPersonsInfo2('Odin')
console.log(person.then(data => { console.log(data) }))