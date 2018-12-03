const fs = require("fs");
const PATH = __dirname + "/input.txt";
const arr = fs.readFileSync(PATH).toString().split("\n");

function commonCheck(inputArr) {
  const uniqueInputArr = [...new Set(inputArr)];
  let commonBoxIdLetters = "";
  while (commonBoxIdLetters === "") {
    for (let x = 0; x < uniqueInputArr.length; x++) {
      for (let y = x + 1; y < uniqueInputArr.length; y++) {
        let diff = 0;
        let diffIndex = null;
        for (let i = 0; i < uniqueInputArr[x].length; i++) {
          if (uniqueInputArr[x][i] !== uniqueInputArr[y][i]) {
            diff += 1;
            diffIndex = i;
          }
          if (diff > 1) {
            break;
          }
        }
        if (diff === 1) {
          commonBoxIdLetters = uniqueInputArr[x].slice(0, diffIndex) + uniqueInputArr[x].slice(diffIndex + 1);
          break;
        }
      }
    }
  }
  return commonBoxIdLetters;
}

console.log(commonCheck(arr));
