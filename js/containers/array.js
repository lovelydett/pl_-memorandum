// Examine the use of Array in JS

// 1. Create an array of size N
const N = 10;
const arr = Array(N); // create an array of size N

// 2. Init array with a value or logic
arr.fill(0);
arr.forEach((val, i) => {
    arr[i] = i + 1;
});

// 3. Create two-dimensional array
const m = 3,
    n = 4;
const arr2D = Array(m).fill(Array(n)); // create a 2D array of size m x n
arr2D.forEach((row, i) => {
    row.fill(0);
    row.forEach((_, j) => {
        row[j] = i * n + j + 1;
    });
});
