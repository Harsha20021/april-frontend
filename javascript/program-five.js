// anagrams -- abc  bac -- 2 words with the same character -- to find whether the give words are anagrams 

/*let word1 = prompt("Enter first word:");
let word2 = prompt("Enter second word:");

// convert to lowercase, split into letters, sort and join back
if (
    word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("")
) {
    console.log("The words are anagrams");
} else {
    console.log("The words are not anagrams");
}*/

function isAnagram(str1,str2){
    let value1 = str1.split("").sort().join("");
    let value2 = str2.split("").sort().join("");

    return value1 == value2;
}
let op = isAnagram("abc","bac");
console.log("value",op);