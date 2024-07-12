/*
7.Write a function that generates the first n numbers of the 
Fibonacci sequence.
*/
function fibonacciSeries(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let f1 = 0;
    let f2 = 1;
    let f3 = 0;
    let fibonacci = [f1, f2];

    for (let i = 2; i < n; i++) {
        f3 = f1 + f2;
        fibonacci.push(f3);
        f1 = f2;
        f2 = f3;
    }
    return fibonacci;
}

console.log(fibonacciSeries(0));  
console.log(fibonacciSeries(5)); 
console.log(fibonacciSeries(8)); 