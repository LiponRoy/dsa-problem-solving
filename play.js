const array = [3, 8, 2, 5, 7, 6, 12];
let current = 0; // Stores sum of the current window
let maxSum = 0; // Stores the maximum sum found so far
const k = 4; // Window size

// Step 1: Calculate the sum of the first window (first k elements)
for (let i = 0; i < k; i++) {
    current += array[i];
}

// Step 2: Slide the window across the array
// Start from index 1 because the first window is already calculated
maxSum = current;

for (let i = 1; i <= array.length - k; i++) {
    // Remove the element leaving the window
    // Add the new element entering the window
    current = current - array[i - 1] + array[i + k - 1];
    // Update maxSum if the current window sum is greater
    if (current > maxSum) {
        maxSum = current;
    }
}

console.log('maxsum', maxSum);
