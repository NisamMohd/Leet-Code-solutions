/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newS = ""
    for(i=0; i<indices.length; i++){
        let p = indices.indexOf(i);
        newS += s[p]
    }
    return newS
};