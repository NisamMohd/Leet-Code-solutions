/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let p = 1
    let sum = 0
    let mod = 0
    while(n > 0){
        mod = n % 10;
        p = p * mod
        sum = sum + mod
        n= Math.floor(n / 10)
    }

    return result = p - sum
    
};