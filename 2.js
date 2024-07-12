/*
2.Write a function that takes a string input representing
a simple arithmetic expression (only addition and subtraction)
and returns the result.
*/
function calculation(strInput) {
  strInput = strInput.replace(/\s/g, "");

  if (!/[+\-]/.test(strInput)) return parseInt(strInput);

  let numbers = strInput.split(/([+\-])/);
    console.log(numbers)
  let output = 0;
  let i = 0;

  if (numbers[0] === "" && numbers[1] === "-") {
    output = -parseInt(numbers[2]);
    i = 3;
  } else {
    output = parseInt(numbers[0]);
    i = 1;
  }

  for (; i < numbers.length; i += 2) {
    if (numbers[i] === "+") {
      output += parseInt(numbers[i + 1]);
    } else if (numbers[i] === "-") {
      output -= parseInt(numbers[i + 1]);
    }
  }

  return output;
}

console.log(calculation("52 +5 -10")); 
console.log(calculation("-5 + 10 - 3"));
