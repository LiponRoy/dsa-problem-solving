const array = [3, 8, 2, 5, 7, 6, 12];
let current = 0; // current window sum
let minSum = Infinity; // minimum sum
const k = 4; // window size

// Step 1: Calculate sum of first window
for (let i = 0; i < k; i++) {
    current += array[i];
}

minSum = current;

// Step 2: Slide the window
for (let i = 1; i <= array.length - k; i++) {
    // remove left element, add right element
    current = current - array[i - 1] + array[i + k - 1];

    if (current < minSum) {
        minSum = current;
    }
}

console.log('minSum', minSum);
