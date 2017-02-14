function factorial (num) {
    if (num < 0) return 0;
    debugger;
    if (num === 0) return 1;
    return num * factorial(num-1); 
}

module.exports = factorial

