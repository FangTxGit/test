// function add(...args) {
//   var fn = function (...arg_fn) {
//     return add(...args.concat(arg_fn));
//   };
//   fn.toString = function () {
//     return args.reduce((a, b) => a + b);
//   };
//   return fn;
// }
// console.log(add(1)(1, 2, 3, 4, 5)(1, 1, 2));

var name = '1';
var fn = function () {
  this.name = '2';
};

var a = new fn();

console.log(a.name);

var b = fn();

console.log(name);
