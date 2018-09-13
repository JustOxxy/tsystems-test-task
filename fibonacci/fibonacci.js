// (function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// })(YOUR_NUMBER);

(function fib(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
})(YOUR_NUMBER);
