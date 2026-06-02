// to count the vowles in the given sentence 

let str = "hello morning";


function countvowels(sentence){
    let arr = sentence.split("");
    let vowles = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i< arr.length; i++){
        if(vowles.includes(arr[i])){
            count++;
        }
    }
    return count;
}
let op = countvowels(str);
console.log("No of vowles",op);