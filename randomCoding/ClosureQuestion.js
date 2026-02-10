function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const inc = counter();
inc(); // 1
inc(); // 2
