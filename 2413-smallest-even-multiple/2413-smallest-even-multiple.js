/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let x = 0
    for(i=1;i>0;i++){
        x = n * i
        if(x % n === 0 && x % 2 === 0)
        return x
    }
};