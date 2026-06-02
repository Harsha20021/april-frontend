/* arrow function 
const sayHello = () ==> {
    console log("arrow function check");
}
    sayHello();  */

const sayHello = () => {
    console.log("Arrow fun call");
};
sayHello();

// alt shift a
/* const sum =(a,b) => {    
    return a+b;
}; */


// adv of arrow function is that u dont need a return statement, very simple to write and singel line logic needs no reeturn statement.
// it internally handels this keyword


const sum = (a,b) => a+b;

let res =  sum(5,10);
console.log(res);