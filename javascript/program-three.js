// to find the largest word in the sentence 
let str = "Hello i am attending class";

function largestword(sentence){
    let arr=sentence.split(" ");
    let large="";

    for(let i=0; i<arr.length; i++){
        if (arr[i].length>large.length){
            large=arr[i];
        }
    }
    return large; // to get the length of the laarget word large.length
}
let value = largestword(str);
console.log(value);

let city = "Bengaluru         ";   // to use trim in the function to remove the spaces 
console.log("city",city.trim().length);