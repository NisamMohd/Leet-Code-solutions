/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let countL = 0;
    let countR = 0;
    let count = 0;

    for (i of moves) {
        if (i === 'L') {
            countL++;
        } else if (i === 'R') {
            countR++;
        } else {
            count++;
        }
    }

    if (countR > countL) {
        return countR - countL + count;
    } else if (countR < countL) {
        return countL - countR + count;
    } else {
        return count;
    }
};
