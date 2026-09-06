/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const arr = [];
    let person = 'bob'
    const numlength = nums.length;
    nums.sort((a,b) => a - b)
    for(i=0;i<numlength;i++){
        if(person === 'bob'){
            arr.push(nums.splice(1,1)[0])
            person = 'alice';
        }else{
            arr.push(nums.splice(0,1)[0])
            person = 'bob'
        }
    }
    return arr
};