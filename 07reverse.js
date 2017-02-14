function reverse  (str) {
   if (str.length < 2) return str;
   return str.slice(-1) + reverse(str.slice(0,-1));
}

module.exports = reverse;