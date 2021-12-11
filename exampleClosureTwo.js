// Example

/* function createCounter() {
  let i = 0;

  function increment() {
    i++;
  }

  function getCounterValue() {
    console.log(i);
  }

  return {
    increment,
    getCounterValue,
  };
}

const counter = createCounter();
counter.getCounterValue();
counter.increment();
counter.increment();
counter.getCounterValue();
 */

// Problem - Counter value in message in 0 on every function call

/* 
function createCounter() {
  let i = 0;

  function increment() {
    i++;
  }

  let message = `Counter is at ${i}`;

  function getCounterValue() {
    console.log(message);
  }

  return { increment, getCounterValue };
} 
*/

// Created only once, so message points to old data snapshot
/* 
const counter = createCounter();
counter.increment();
counter.increment();
counter.getCounterValue();
 */
// Solution - Move message variable in getCounterValue so it get's updated with latest i value

function createCounter() {
  let i = 0;

  function increment() {
    i++;
  }

  function getCounterValue() {
    const message = `Counter is at ${i}`;
    console.log(message);
  }

  return { increment, getCounterValue };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.getCounterValue();
