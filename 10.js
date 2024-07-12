//10. Write a function that converts a given string to title case 
//(capitalizing the first letter of each word).

function Capitalized(str) {
    return str.toLowerCase().split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

const input = 'hello itS me raJ';
const output = Capitalized(input);
console.log(output)