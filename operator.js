// 6. Logicla operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) , finds the first truthy vlaue than stop
// simple first, heavy last
console. log(`or: ${value1 || value2 || check()}`);

// && (and), finds the fist falsy value
// simple first, heavy last
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for(let i = 0; i<10; i++) {
    // wasting time
    console.log('😀');
  }
  return true;
}

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true