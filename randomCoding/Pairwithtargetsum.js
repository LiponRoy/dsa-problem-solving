function hasPair(arr, target) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return true;
        sum < target ? left++ : right--;
    }
    return false;
}
