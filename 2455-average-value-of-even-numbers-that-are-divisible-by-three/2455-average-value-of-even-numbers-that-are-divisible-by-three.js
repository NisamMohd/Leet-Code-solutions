/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0
    for(const i of nums){
        if(i % 3 === 0 && i % 2 === 0){
            sum += i;
            count++;
        }
    }
    if(count > 0){
        return Math.floor(sum / count) 
    }
    if (count == 0){
        return 0
    }
};