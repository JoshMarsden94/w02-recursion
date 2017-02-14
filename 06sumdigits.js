function sumdigits (num) {
   if (typeof num !== "string") num = String(num);
   if (num.length === 1) return Number(num);
   return Number(num.slice(-1)) + Number(sumdigits(num.slice(0,-1)));
}

module.exports = sumdigits
