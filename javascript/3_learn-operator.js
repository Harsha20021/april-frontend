// operators 

// airthematic operators -- add, sub, mul, mod, exponetial, incremrnt, decrement
// +, -, *, /, %, **, ++  add val++ then print val, -- add val-- then print val
let val = 3;
val--   ;
console.log(val);

// asignment ope --  = (equals to)
let num = 10;
num += 2; // num = num+2
num -= 5;
num *= 2;
num /= 2;

num %= 5;
num **= 2;

console.log(num);

// comparision ope -- >,<,<=,>=,==,!=
console.log(6 == 6);
console.log(7 != 7);

console.log(12 == "12"); // just the val
console.log(12 === "12");// val with the data type 

console.log(12 != "12"); 
console.log(12 !== "12");


console.log(5>2);
console.log(5<2);
console.log(5<=2);
console.log(5>=2);
console.log(5>=5);

// logical ope-- and, or, not 
console.log(!false);
console.log(5 > 2 && 7 > 2);
console.log(5 > 2 && 2 < 1);
console.log(5 > 1 || 2 < 1);
