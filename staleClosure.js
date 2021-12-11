// Problem - Stale number value in message
let number = 0;

const increment = () => {
  number += 1;
  const message = `Incremented to ${number}`;

  return () => {
    console.log(message);
    console.log(`Number: ${number}`);
  };
};

const log = increment();
log();
increment();
increment();
log(); // Incremented to 1; Number: 3

// Solution 1.

// Move message outside so only one copy of it every exists
/* 
let number = 0;
let message = "";

const increment = () => {
  number += 1;
  message = `Incremented to ${number}`;

  return () => {
    console.log(message);
    console.log(`Number ${number}`);
  };
};

const log = increment();
increment();
increment();
log(); 
*/

// Solution 2.

// Move message into anonymous function. (Will be created on every function call) In this case: when log is called so it sees latest values
/*
let number = 0

const increment = () => {
    number += 1

    return () => {
        const message = `Increment to ${number}`

        console.log(message)
        console.log(`Number: ${number}`)
    }
}

const log = increment();
increment()
increment()
log()
*/
