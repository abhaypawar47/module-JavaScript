// function test(...args) {
//   console.log(args);
// }

// test(1, 2, 3);
// // args = [1, 2, 3]

// const test = (...args) => {
//   console.log(args);
// };

// test("hello", 1, 2, 3, 4, 5, "hello abhay");

//------------------
const sum = (...args) => {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
};

console.log(sum(10, 20, 30));
