// function context
function getThis() {
    // this is inside a function
    return this
}

// on crée le sobjets
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
//on dfinit des fonctions dans les objets
obj1.getThis = getThis;
obj2.getThis = getThis;

// this représente l'objet dans lequel est contenue la fonction
//console.log(obj1.getThis()) //{ name: 'obj1', getThis: [Function: getThis] }
//console.log(obj2.getThis()) //{ name: 'obj2', getThis: [Function: getThis] }

// 2ème cas
const obj4 = {
    name: "obj4",
    getThis() {
        return this;
    },
};

const obj5 = { name: "obj5" };
obj5.getThis = obj4.getThis;
console.log(obj5.getThis())