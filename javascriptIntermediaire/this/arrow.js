// exécuter dans un browser les codes de cette page
const myObject = {
    myMethod: () => {
        console.log(this);// this == Window
    }
};


const myObject2 = {
    myMethod: function () {
        console.log(this);// this !== Window, this === myObject2
    }
};
