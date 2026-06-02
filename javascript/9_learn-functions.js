// 26/05/26
// normal function
function SayHello(){
    console.log("Say Hello");
}
SayHello();

// function with an argument
function sum(a,b){
    console.log("Sum is",a+b);
}
sum(5,10);

// function with return type or value
function sum(a,b){
    return a+b;
}
let sumValue = sum(5,10);
console.log("sum is",sum(5,10));

// funtion decleration - let, declearing the function-- everything on top is function decleration 

// function expression 

let sayhello=function(){
    console.log("Say Hello");
}
sayhello();


// with an argument
let addition=function(a,b){
    console.log("Sum is",a+b)
}
addition(5,10)


//return type
let sums=function(a,b){
    return a+b;
}
let sumval=sums(5,10);
console.log(sumval);