/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0 ; depth = 0;
    for(const i of s){
        if(i === '('){
            if(depth === count){
                depth++;
            }
            count++
        }
        if(i === ')'){
            count--;
        }
    }
    return depth
};