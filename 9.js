// 9. Write a function that filters out even numbers from
// an array.

function EvenFilter(inputArr) {
    return inputArr.filter(element=>element%2===0);
}

const inputArr = [1,2,3,4,5,6,7,8,9,10];
console.log(EvenFilter(inputArr))