//? example one of a  countdown
// function countdown(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);

//   countdown(n - 1);
// }

// countdown(10);

// //? example 2 of a factorial
// function factorial(n) {
//   if (n === 1 || n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(0));

// //? factorial of a number using a recurrsion

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n*factorial(n - 1);
// }

//? fibonnici using a recurssion

function fibo(n) {
  if (n <= 1) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(3));
