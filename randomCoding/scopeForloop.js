for (let i = 1; i <= array.length - k; i++) {
    // Remove the element leaving the window
    // Add the new element entering the window
    current = current - array[i - 1] + array[i + k - 1];
    // Update maxSum if the current window sum is greater
    if (current > maxSum) {
        maxSum = current;
    }
}
