/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(i=1;i<=num;i++){
        if(i*i > num){
            return false
        }
        if(i * i === num){
            return true;
        }
    }
};