// Problem - exposing global variable

/* let foo = 1;

function add() {
  foo = foo + 1;
  return foo;
}

console.log(add());
console.log(add());
foo = 1000;
console.log(add()); */

// Solution - hide "foo" in closure

// 1. IIFE
const add = (function () {
  let foo = 1;

  return function () {
    foo = foo + 1;
    return foo;
  };
})();

// 2. Higher order function

/* function getAdd() {
  let foo = 1;

  return function () {
    foo = foo + 1;
    return foo;
  };
} */
// const add = getAdd();
console.log(add());
console.log(add());
console.log(add());
