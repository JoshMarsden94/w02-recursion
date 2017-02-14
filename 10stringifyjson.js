function stringifyjson (s) {

if (typeof s === 'string') return '\"'+s+'\"';
if (Array.isArray(s) && s.length === 0) return '[]';
if (typeof s === 'object' && Object.keys(s).length === 0) return '{}';
if (typeof s === 'boolean') return s;
if (typeof s === 'number') return s;

if (Array.isArray(s)) {
    var newArr = "["
    var res = '';
    s.forEach(function (el) {
        res += stringifyjson(el) + ','        
    })
    res = res.slice(0, res.length - 1);
    var endBracket = "]"
    return newArr.concat(res, endBracket);
} else if (typeof s === 'object') {
    var newObj = "{}"
    var res = '';
    s.forEach(function (el) {           ///////// Use for in loop over for each
        res += stringifyjson(el) + ','        
    })
    res = res.slice(0, res.length - 1);
    var endBracket = "}"
    return newObj.concat(res, endBracket);
}
}

module.exports = stringifyjson;
