// 26/05/26

let arr = ["RCB","GT","SRH"];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);

// to add value to array -- add the value to tail end 
console.log(arr.push("RR"));
console.log(arr);

// to pop value -- will remove the ele form tail end 
console.log(arr.pop());
console.log(arr);

// unshift method -- will add the value to the start of the array 
arr.unshift("PBKS");
console.log(arr);

// shift method -- to remove the value form the first in the array 
arr.shift();
console.log(arr);

arr.reverse(); // will work for array not string
console.log(arr);

arr.sort();  // will work for array not string
console.log(arr);