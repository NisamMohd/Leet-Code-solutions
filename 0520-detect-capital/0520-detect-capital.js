/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    switch(true){
        case word === word.toUpperCase():
            return true;
        case word === word.toLowerCase():
            return true;
        case word[0] === word[0].toUpperCase():
            for(i=1 ; i<word.length;i++){
                if(word[i] === word[i].toUpperCase()){
                    return false;
                }
            }
            return true;
        default :
            return false
    }
    
};