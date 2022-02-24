const prompt = require("prompt-sync")();
const numArray = [];
const target = parseInt(prompt("target: "));
const numOfInput = prompt("nums: ");
let result = [];

for (let i = 0; i < parseInt(numOfInput); i++) {
  const value = prompt(`nums ${i}: `);
  numArray.push(parseInt(value));
}

for (let j = 0; j < parseInt(numOfInput) - 1; j++) {
  if (numArray[j] + numArray[j + 1] === target) {
    result = [j, j + 1];
    break;
  }
}

console.log(result);
