function sumzeros (num) {
   if (typeof num !== "string") num = String(num);
   if (num.length === 0) return 0;
   if (num[num.length-1] !== "0") {
        return 0 + sumzeros(num.slice(0,-1))
    } else {
        return 1 + sumzeros(num.slice(0,-1));
    }
}

module.exports = sumzeros

