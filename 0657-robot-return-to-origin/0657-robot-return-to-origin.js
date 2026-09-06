/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    for(i of moves){
        if(i === 'R'){
            x++;
        }else if(i === 'L'){
            x--;
        }else if(i === 'U'){
            y++;
        }else{
            y--;
        }
    }
    if(x === 0 && y === 0){
        return true;
    }else{
        return false;
    }
};