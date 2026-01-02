//? reduce function in a js
//*reduce() is an array method that processes elements sequentially and reduces them into a single value.

// let num = [1, 2, 3, 4, 5, 6];
// let sum = num.reduce((previous, current,0) => previous + current);
// console.log(sum);

//*another example
// let num = [1, 2, 3, 4, 5, 6];
// let product = num.reduce((previous, current) => previous * current);
// console.log(product);

//? Remove Items Using splice()
// let array = ["today", "was", "not", "so", "great"];
// let arr = array.splice(2, 2);
// console.log(arr);
//? example Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(1, 4);
// console.log(arr);
//!-----
//? add item using splice
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;
// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
//? example remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
// function htmlColorNames(arr) {
//   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//   return arr;
// }
// console.log(
//   htmlColorNames([
// "DarkGoldenRod",
// "WhiteSmoke",
// "LavenderBlush",
// "PaleTurquoise",
// "FireBrick",
//   ])
// );
//!-----
//?copy array item using slice
/*Rather than modifying an array, slice() copies or extracts a given number of elements 
to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — 
the first is the index at which to begin extraction, and the second is the index at which to stop extraction 
(extraction will occur up to, but not including the element at this index).*/

// let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
// let todaysWeather = weatherConditions.slice(1, 3);
// console.log(todaysWeather);
//!-----
//? spread operator
/*spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...*/
// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// console.log(thatArray);
//? Combine Arrays with the Spread Operator
// let thisArray = ["sage", "rosemary", "parsley", "thyme"];
// let thatArray = ["abhay", ...thisArray, "pawar"];
// console.log(thatArray);
//?example-----
// function spreadOut() {
//   let fragment = ["to", "code"];
//   let sentence = ["learning", ...fragment, "is", "fun"];
//   return sentence;
// }
// console.log(spreadOut());
//!-----
//? Check For The Presence of an Element With indexOf()
// let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
// console.log(fruits.indexOf("oranges"));
//? exmple  Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
// function quickCheck(arr, elem) {
//   return arr.indexOf(elem) !== -1;
// }
// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
//!-----
//?
