/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let b = true
    while(b){
        if(nums.indexOf(original) === -1){
            b = false
        }else{
            original *= 2
        }
    }

    return original
};