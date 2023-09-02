// script nodeJS
const fs = require('fs');
const path = require('path');

filepath1 = path.join(__dirname, 'a.json')
filepath2 = path.join(__dirname, 'b.json')

let rawdata1 = fs.readFileSync(filepath1);
let student1 = JSON.parse(rawdata1); console.log(student1.list.length);
let rawdata2 = fs.readFileSync(filepath2);
let student2 = JSON.parse(rawdata2); console.log(student2.list.length);
let result = student1.list.concat(student2.list)
console.log(result.length);