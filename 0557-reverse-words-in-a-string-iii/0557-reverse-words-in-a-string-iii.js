/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = "", reversed = ""
    s = s.split(" ")
    for(i=0;i<s.length;i++){
        word = s[i].split("").reverse().join("")
        reversed = reversed + word + " "
    }
    return reversed.trim()
};