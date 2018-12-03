const fs = require('fs');
const PATH = __dirname + '/input.txt';
const arr = fs.readFileSync(PATH).toString().split('\n')

function idCheck(id) {
    const dict = {};
    let two = false;
    let three = false;

    for (let x=0; x < id.length; x++) {
        if (dict.hasOwnProperty(id[x])) {
            dict[id[x]] += 1;
        } else {
            dict[id[x]] = 1;
        }
    }

    const arr = Object.values(dict);
    if (arr.includes(2)) {
        two = true
    }

    if (arr.includes(3)) {
        three = true;
    }
    
    return { two, three };
}

function getChecksum(inputArr) {
    let twos = 0;
    let threes = 0;

    inputArr.forEach(id => {
        const {two, three} = idCheck(id);
        if (two) twos += 1;
        if (three) threes += 1;
    });

    return twos * threes;
}

console.log(getChecksum(arr));