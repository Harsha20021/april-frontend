// 1/06/26

// two types of type conversion are
// implicit conversion 
// explicit conversion

console.log(5+2);
console.log("5"+2)  // op is 52 this is an implicit con -- 2 is getting converted to string 
console.log(5+2+"ABC"+8+2); // it will convert string completely  7ABC82

console.log("5"-2); // it got conv form string to num
console.log("125"/5); // "" 
// other than addition sting will get converted to no 

console.log("5"-true); // value of true is 1 
console.log("5"+true); // 

let name = "david";
if (name){
    console.log("i am david");
}
if (" "){console.log("i am xyz")};


// if the string has some statment then itll become true and give true
if ("hello"){
    console.log("True statement");
}else{
    console.log("False statement");
}


// here is false 
if (""){
    console.log("True statement");
}else{
    console.log("false statement");
}

