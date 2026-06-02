//  to find the elements in an array that add up to 7 and print their index op[[1,4],[2,3]]

let arr = [1,2,3,4,5];
let val = [7];
function findindexpairs(ar,val){
    let op = [];
    for(let i = 0; i < ar.length; i++) {
        for(j = i+1; j< arr.length; j++){
            if(arr[i] + arr[j] == val){
                op.push([i,j]);
            }
        }
    }
    return op;
}
let op = findindexpairs(arr, val);
console.log("pairs are",op);