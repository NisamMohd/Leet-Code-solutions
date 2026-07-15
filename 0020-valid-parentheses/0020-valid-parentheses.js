/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (const b of s){
        if(b === '(' || b === '[' || b === '{'){
            stack.push(b)
        }else {
             if (stack.length === 0) return false;
            const top = stack.pop()

            if (
                (b === ')' && top !== '(') || (b === ']' && top !== '[') || (b === '}' && top !== '{')
            ){
                return false;
            }
        }

        }
       return stack.length === 0; 
    }
    
    