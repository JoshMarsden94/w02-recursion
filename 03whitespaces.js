function whiteSpaces (s) {
    if (s === "") return 0;
    if (s[s.length-1] !== " ") {return 0 + whiteSpaces(s.slice(0,-1))
    } else {
        return 1 + whiteSpaces(s.slice(0,-1));
    }
}
module.exports = whiteSpaces
