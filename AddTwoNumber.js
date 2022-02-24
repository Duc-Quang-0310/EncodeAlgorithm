const prompt = require("prompt-sync")();
const l1 = [];
const l2 = [];

const l1Length = parseInt(prompt("l1Length: "));
for (let i = 0; i < l1Length; i++) {
  l1.push(parseInt(prompt(`l1 ${i}: `)));
}

const l2Length = parseInt(prompt("l2Length: "));
for (let i = 0; i < l2Length; i++) {
  l2.push(parseInt(prompt(`l2 ${i}: `)));
}

const total = l1.join() + l2.join();
console.log("total: ", total);
