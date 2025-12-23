//? function as a value of a key-------------------------------
// const person = {
//   name: "taylor",
//   sayHello: function () {
//     return ` hello,my name is ${this.name}`;
//   },
// };

// console.log(person.sayHello());
//----------------------------------------------------------
//* same example using a es6 syntax
// const person = {
//   name: "abhay",
//   sayHello() {
//     return `my name is ${this.name}`;
//   },
// };
// console.log(person.sayHello());
//----------------------------------------------------------
//* chacking whether the arrow function  is working on it / not
// const person = {
//   name: "akshay",
//   sayHello: () => {
//     return `welcome to js mr ${person.name}`;
//   },
// };

// console.log(person.sayHello());

//---------------------------------------------------------------------------
//?Use export to Share a Code Block common general way of doing it-----------------
// export const add = (x, y) => {
//   return x + y;
// };

//-------------
//*anothher way of doing a same thing
// const add = (x, y) => {
//   return x + y;
// };
// export { add }; // This Helps In A Multiple Export Want To Do eb export{add,subtract}
//-----------------------------------------------------------------------------------------------------------
//?Reuse JavaScript Code Using import
// import {add} from './math_functions.js'
// import {add,subtract} from './math_functions'
//-----------------------------------------------------------------------------------------------------------
//?Use * to Import Everything from a File
// import * as myMathModule from "./mathFunction";
// myMathModule.add(12, 25);
// myMathModule.subtract(852, 20);
//----------------------------------------------------------------------------------------------------------
//?Create an Export Fallback with export default
// export default function add(x, y) {
//   return x + y;
// }
//--------------------------------------
//?  Import a Default Export
// import add from "./math_function";                           //no {} surrounded for a  function name

//!Create a JavaScript Promise------------
// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously.
// When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function,
// so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject.
// These are methods used to determine the outcome of the promise. The syntax looks like this:

// const myPromise = new Promise((resolve, reject) => {});
// const makeServerRequest = new Promise((resolve, reject) => {});

//--------------------------------------------------------------------------------

//?    Complete a Promise with resolve and reject

// A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state
// because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this.
// resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument,

// const myPromise2 = new Promise((resolve, reject) => {
//   if (conditonHere) {
//     resolve("resolved");
//   } else {
//     reject("promise rejected");
//   }
// });

//--------------------------------------------------------------------

//?  Handle a Fulfilled Promise with then
/*Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), 
 often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something 
 with the response from the server. This can be achieved by using the then method.*/

/*The then method schedules callback functions for the eventual completion of a Promise - 
 either fulfillment or rejection. One of the onFulfilled and onRejected handlers will be executed to handle the current promise's fulfillment or rejection.
 When the promise is fulfilled with resolve the onFulfilled handler is called.*/

// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// makeServerRequest.then((result) => {
//   console.log(result);
// });

//-------------------------------------------------------------------
//? Handle a Rejected Promise with catch
myPromise.catch((error) => {});
