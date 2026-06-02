//check for palindrome-- 26/05/26
// pease write a java script function

let text="madam";

function ispalindrome(str){
    let rev = str.split("").reverse().join("");
    console.log("rev value",rev);
    return rev == text;
}
console.log("Output",ispalindrome(text));

// anagrams -- abc  bac -- 2 words with the same character -- to find whether the give words are anagrams 

let word1 = prompt("Enter first word:");
let word2 = prompt("Enter second word:");

// convert to lowercase, split into letters, sort and join back
if (
    word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("")
) {
    console.log("The words are anagrams");
} else {
    console.log("The words are not anagrams");
}