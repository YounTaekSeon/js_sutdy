// 6. Logicla operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console. log(`or: ${value1 || value2 || check()}`);

function check() {
  for(let i = 0; i<10; i++) {
    // wasting time
    console.log('😀');
  }
  return true;
}