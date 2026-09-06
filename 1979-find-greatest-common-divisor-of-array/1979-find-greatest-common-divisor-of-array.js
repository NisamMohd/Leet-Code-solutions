/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b) => a - b)
    const small = nums[0]

    nums.sort((a,b) => b - a)
    const large = nums[0]

    let divisor = 0
    for(i=1;i<=small;i++){
        if(small % i === 0 && large % i === 0){
            divisor = i;
        }
    }

    return divisor;
};