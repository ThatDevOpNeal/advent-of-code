const fs = require('fs');
const PATH = __dirname + '/input.txt';
const arr = fs.readFileSync(PATH).toString().split('\n')

function getFrequency(inputFile) {
    let currentFrequency = 0;
    inputFile.forEach(frequency => {
        currentFrequency += parseInt(frequency);
    });
    return currentFrequency;
}

console.log(getFrequency(arr));
