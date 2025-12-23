//? example 1 for try
// const person = {
//   name: "taylor",
//   sayHello: function () {
//     return ` hello,my name is ${this.name}`;
//   },
// };

// console.log(person.sayHello());
//----------------------------------------------------------
//? same example using a es6 syntax
// const person = {
//   name: "abhay",
//   sayHello() {
//     return `my name is ${this.name}`;
//   },
// };
// console.log(person.sayHello());
//----------------------------------------------------------
//? chacking whether the arrow function  is working on it / not
// const person = {
//   name: "akshay",
//   sayHello: () => {
//     return `welcome to js mr ${person.name}`;
//   },
// };

// console.log(person.sayHello());

//---------------------------------------------------------------------------
//*Use export to Share a Code Block

export const add = (x, y) => {
  return x + y;
};
