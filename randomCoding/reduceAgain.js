const numbers = [10, 5, 20, 8];

const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(max); // 20
