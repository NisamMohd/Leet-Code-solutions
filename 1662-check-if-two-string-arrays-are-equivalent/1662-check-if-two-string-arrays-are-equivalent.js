/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const sum1 = word1.reduce((sum,i) => sum + i, 0)
    const sum2 = word2.reduce((sum,i) => sum + i, 0)

    return sum1 === sum2
};