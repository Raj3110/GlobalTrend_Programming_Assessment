/*
3.Write a function that takes a nested array and
 returns a flattened array.
}
 */

function flattenedArr(inputArr){
    let container = [];
    for (let i = 0; i < inputArr.length; i++) {
        if(Array.isArray(inputArr[i])){
           container.push(...flattenedArr(inputArr[i]));
        }else{
            container.push(inputArr[i]);
        }
    }
    return container;
}

let input = [
  [1, 2, [3, [10,11]]],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

let output = flattenedArr(input);
console.log(output);