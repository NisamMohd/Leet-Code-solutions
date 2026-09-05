/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let position = 0;
    let count = 0;

    for (const value of nums) {
        position += value;

        if (position === 0) {
            count++;
        }
    }

    return count;
    };