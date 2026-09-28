/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let mod , sum = 0;
    for(i of String(x)){
        sum += Number(i)
    }
    mod = x % sum 
    if(mod !== 0){
        return -1
    }else{
        return sum
    }
};