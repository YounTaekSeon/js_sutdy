// 1. Use strict
// 2. added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable
// let (added in ES6)

let globalscope = 'global scope'
{
  let blockscope = 'ellie';
  console.log(blockscope);
  blockscope = 'hello';
  console.log(blockscope);
  console.log('bloack in '+globalscope);
}
console.log(globalscope);
// console.log(blockscope);

// var
// var hoisting: move declaration from bottom to top
// has no block scope

// 3. Contants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primtive, single item: number, string, boolean, null, undefined, symbol
// object, box, container
// function, first-class function

const count = 17; // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values:
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// ture: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, crate unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text= 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);  // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);  // nunber
