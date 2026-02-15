function charCount(str) {
    const obj = {};
    for (let char of str) {
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
}
