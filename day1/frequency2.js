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

function getFirstDuplicate(inputFile) {
    let currentFrequency = 0;
    let frequencyResultList = [];
    let duplicate = null;

    while(duplicate === null) {
        inputFile.forEach(frequency => {
            currentFrequency += parseInt(frequency);
            if (frequencyResultList.includes(currentFrequency) && duplicate === null) {
                duplicate = currentFrequency;
            }
            frequencyResultList.push(currentFrequency);
        });
    }
    return duplicate;
}

// console.log(getFrequency(arr));
console.log(getFirstDuplicate(arr));
