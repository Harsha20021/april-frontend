//object : for in and for of
let city = "Bangalore";
let freq = {};
for (let char of city) {
  freq[char] = (freq[char] || 0) + 1;
  console.log(char);
}
console.log(freq);
let name = "manasviSanvi";
let fre = {};
for (let char1 of name) {
  fre[char1] = (fre[char1] || 0) + 1;
}
console.log(fre);
