/*
6. Write a function that takes a string 
and capitalizes the first letter of each word in the string.
*/

function Capitalized(str) {
    return str.toLowerCase().split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

const input = 'hello itS me raJ';
const output = Capitalized(input);
console.log(output)