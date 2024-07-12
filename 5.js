/*
Write a function that takes an array and 
returns a new array with duplicates removed.
*/

function removeDuplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicate(inputArr));