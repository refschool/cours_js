//  https://github.com/greasemonkey/greasemonkey/issues/3015   intercept AJAX response
// script nodeJS
const fs = require('fs');
const path = require('path');

inputFile = path.join(__dirname, 'herault.json')
outputFile = path.join(__dirname, 'result.json')

let rawdata1 = fs.readFileSync(inputFile);
let student = JSON.parse(rawdata1);
//merge  the lists
let result = student.reduce((acc, current) => {
    return acc.concat(current.list)
}, [])

console.log(result.length)
let outputraw = JSON.stringify(result)
fs.writeFileSync(outputFile, outputraw, err => {
    if (err) {
        console.log(err)
    }
})