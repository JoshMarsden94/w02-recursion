function maxarray (arr) {
   if (arr.length = 1) {return arr[0];}
   var last = arr[arr.length-1]
   var secondToLast = arr[arr.length-2]
   if (last > secondToLast) {
       return maxarray(arr.slice(0,-2).concat(last))
   } else {
       return maxarray(arr.slice(0,-2).concat(secondToLast))
   }
}

console.log(maxarray([1,2,3,2,1]));
module.exports = maxarray;

//check last 2 in array,
//see which one is biggest
//return () but put in the new array
