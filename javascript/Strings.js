//25/5--->Strings
var str = "Bangalore";
console.log(str);
console.log(str.length);
console.log(str.toLocaleLowerCase()); //method
console.log(str.toLocaleUpperCase()); // method so bracket is used
console.log(str.charAt(7));
console.log(str.repeat(10)); //repeation of the word
var str = "Manasvi";
console.log(str);

//concadination
let city1 = "Hassan";
let city2 = "Ckm";

console.log(city1 + " " + city2);
console.log(city1.concat(" ", city2));

//methods
let para = "i   live  in  bangalore";
console.log(para.includes("")); //chceks the input string is available are not answer will be in the boolean
console.log(para.indexOf("livell")); //-1 answer because not there in the inout
console.log(para.indexOf("in"));

console.log(para.split(""));
console.log(para.split("").join(""));
console.log(para.split("  ").join(" "));
