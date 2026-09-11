/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let eSum = 0;
    let dSum = 0;
    for( i of nums){
        eSum = eSum + i;
        while (i > 0) {
        const mod = i % 10;
        dSum = dSum + mod
        i = Math.floor(i / 10);
    }}

    return eSum - dSum;
};