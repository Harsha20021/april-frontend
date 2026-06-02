// removing duplicates from array [1,2,2,3,4,5,5,5] using index of 
/*
let arr=[1,2,2,3,4,5,5,5];
let abc = [];
for (let i = 0; i < arr.length; i++){
    if (abc.indexOf(arr[i]) == -1){
        abc.push(arr[i]);
    }
}
console.log(abc); */


let arr=[1,2,2,3,4,5,5,5];
function printuni(ar){
    let abc = [];
    for (let i = 0; i < ar.length; i++){
        if (abc.indexOf(ar[i]) == -1){
        abc.push(ar[i]);
        }
    }
    return abc;
}
let uniqval = printuni(arr);
console.log(uniqval);