/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let nums = []
    for(i=1;i<=num;i++){
        let sum = 0
        for(j of String(i)){
            sum += Number(j)
        }
        if(sum % 2 === 0){
            nums.push(i)
        }
    }
    return nums.length
};