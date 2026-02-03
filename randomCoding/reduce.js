const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 10
