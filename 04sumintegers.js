function sumIntegers (num) {
    if (num < 0) return 0;
    if (num === 0) return 0;
    return num + sumIntegers(num-1);
}

module.exports = sumIntegers

