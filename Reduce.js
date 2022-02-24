const axios = require("axios").default;

// EX-1:
// const receipts = [
//   {
//     denomination: [
//       { amount: 2, value: 100 },
//       { amount: 3, value: 50 },
//     ],
//   },
//   { denomination: [{ amount: 8, value: 50 }] },
//   {
//     denomination: [
//       { amount: 1, value: 20 },
//       { amount: 1, value: 10 },
//       { amount: 1, value: 5 },
//       { amount: 4, value: 1 },
//       { amount: 1, value: 0.5 },
//       { amount: 1, value: 0.2 },
//       { amount: 1, value: 0.1 },
//     ],
//   },
//   {
//     denomination: [
//       { amount: 1, value: 100 },
//       { amount: 2, value: 50 },
//       { amount: 1, value: 0.5 },
//       { amount: 1, value: 0.2 },
//       { amount: 2, value: 0.1 },
//     ],
//   },
//   {
//     denomination: [
//       { amount: 1, value: 100 },
//       { amount: 1, value: 50 },
//       { amount: 6, value: 5 },
//       { amount: 5, value: 1 },
//     ],
//   },
// ];

// const totalAmountOfMoney = receipts
//   .map((receipt) => {
//     return receipt.denomination.reduce(
//       (prevDenomination, currentDenomination) => {
//         const currentTotalMoney =
//           currentDenomination.amount * currentDenomination.value;
//         return prevDenomination + currentTotalMoney;
//       },
//       0
//     );
//   })
//   .reduce((prevValue, currentValue) => prevValue + currentValue, 0);

//EX - 2: Turn an array of numbers into a total of all the numbers

// function total(arr) {
//   if (Array.isArray(arr)) {
//     return arr.reduce((prevNum, currentNum) => prevNum + currentNum, 0);
//   }
//   return 0;
// }

// console.log(total([1, 2, 3])); // 6

//EX - 3: Turn an array of numbers into a long string of all those numbers

// function stringConcat(arr) {
//   if (Array.isArray(arr)) {
//     return arr.reduce(
//       (prevNum, currentNum) => String(prevNum) + String(currentNum),
//       ""
//     );
//   }
//   return "";
// }

// console.log(stringConcat([1, 2, 3])); // "123"

//EX - 4: Turn an array of voter objects into a count of how many people voted

// function totalVotes(arr) {
//   if (Array.isArray(arr)) {
//     return arr.reduce((prevNum, currentValue) => {
//       if (currentValue.voted) {
//         return prevNum + 1;
//       }
//       return prevNum;
//     }, 0);
//   }
//   return 0;
// }

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];
// console.log(totalVotes(voters)); // 7

//EX - 5: Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr) {
//   if (Array.isArray(arr)) {
//     return arr.reduce(
//       (prevNum, currentValue) => prevNum + currentValue.price,
//       0
//     );
//   }
//   return 0;
// }

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 },
// ];

// console.log(shoppingSpree(wishlist)); // 227005

//EX - 6: Given an array of arrays, flatten them into a single array

// function flatten(arr) {
//   if (Array.isArray(arr)) {
//     return arr.reduce(
//       (prevArray, currentValue) => prevArray.concat(currentValue),
//       []
//     );
//   }
//   return [];
// }

// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//EX - 7: Given an array of potential voters, return an object representing the results of the vote

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55,
// and how many of each of those age ranges actually voted. The resulting object containing
//  his data should have 6 properties. See the example output at the bottom.

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];

// function voterResults(arr) {
//   const initValue = {
//     numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numOldVotesPeople: 0,
//     numOldsPeople: 0,
//   };

//   if (Array.isArray(arr)) {
//     return arr.reduce((previousValue, currentValue) => {
//       if (currentValue.age >= 18 && currentValue.age <= 25) {
//         previousValue.numYoungPeople = previousValue.numYoungPeople + 1;
//         if (currentValue.voted) {
//           previousValue.numYoungVotes = previousValue.numYoungVotes + 1;
//         }
//       }

//       if (currentValue.age >= 26 && currentValue.age <= 35) {
//         previousValue.numMidsPeople = previousValue.numMidsPeople + 1;
//         if (currentValue.voted) {
//           previousValue.numMidVotesPeople = previousValue.numMidVotesPeople + 1;
//         }
//       }

//       if (currentValue.age >= 36 && currentValue.age <= 55) {
//         previousValue.numOldsPeople = previousValue.numOldsPeople + 1;
//         if (currentValue.voted) {
//           previousValue.numOldVotesPeople = previousValue.numOldVotesPeople + 1;
//         }
//       }

//       return previousValue;
//     }, initValue);
//   }

//   return initValue;
// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/

//EXTRA CREDIT - SEE Watcher on github

// const temp = async () => {
//   try {
//     const response = await axios.get(
//       "https://api.github.com/users/Duc-Quang-0310/repos"
//     );
//     console.log("response: ", response.data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// temp();

const promise = Promise.resolve(
  axios.get("https://api.github.com/users/Duc-Quang-0310/repos")
);

let temp;

const dataCollect = promise
  .then((response) => response.data)
  .catch((error) =>
    console.log("Look you have made some error: ", String(error))
  )
  .then((value) => console.log("value: ", value));

console.log("dataCollected: ", dataCollect);
