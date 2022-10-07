/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const sumAll = (x, y, z) => (x + y + z);

let total = sumAll(5, 5, 5);

console.log('Total:', total);

// Extra arguments are ignored

let total2 = sumAll(5, 5, 5, 5, 5, 5);

console.log('Total:', total2);


// Function using ...rest

let sumAlll = (x, y, z, ...rest) => {

    let sum = x + y + z;
    for (let i of rest) {
      sum += i
    } 

    return sum
};

let sum3 = sumAlll(5, 5, 5, 5, 5);

console.log('Sum3:', sum3);