/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    count = 0;
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(i * j === n){
                count++
            }
        }
    }
    if(count === 3){
        return true;
    }else{
        return false;
    }
};