console.log("je suis typescript !")
//implicit type
let helloWorld = "hello world";
helloWorld = "4";
// explicit types
let firstName: string = 'John';
let age: number = 30;
// Tuple
type stringAndNumber = [string, number];
let x: stringAndNumber = ["hello", 13];
//Enums
enum Continents {
    North_America,
    Africa,
    Asia,
    Europe
}

var region = Continents.Africa;// 1
//interfaces
interface User {
    name: string;
    id: number;
}
const user: User = {
    name: 'John',
    id: 0,
    //age:25
}
//composing types -> union
type WindowStates = "open" | "closed" | "minimized";
var win: WindowStates = "open";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;
//const odd: OddNumberUnderTen = 11;

// get two types of params
const getLength = (param: string | string[]) => {
    return param.length;
}

//https://www.codingwiththomas.com/blog/typescript-vs-code-api-lets-create-a-tree-view-part-1
//https://stackoverflow.com/questions/56534723/simple-example-to-implement-vs-code-treedataprovider-with-json-data
