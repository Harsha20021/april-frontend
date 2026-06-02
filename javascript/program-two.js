let para = "i live in bangalore";
let newValue = para.split("");
let count = 0;
console.log(para.split(""));
for (let i = 1; i <= newValue.length; i++) {
  if (newValue[i] == "e") {
    count++;
  }
}
console.log(count);
