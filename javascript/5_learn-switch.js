// 22/05/26

let team = "RCB";
// switch (value) condition --- when we have more conditions in a block 
switch(team){
    case "RCB":
        console.log("Way to finals");
        break;
    case "CSK":
        console.log("Out of ipl season");
        break;
    case "PBKS":
        console.log("Lost in the end");
        break;
        default:
            console.log("No team");
}

// eg2

let score = 80;

switch(true){
    case score > 75:
        console.log("Destinction");
        break;
    case score > 65 && score < 75:
        console.log("First class")
        break;
        default:
            console.log("no result")
}