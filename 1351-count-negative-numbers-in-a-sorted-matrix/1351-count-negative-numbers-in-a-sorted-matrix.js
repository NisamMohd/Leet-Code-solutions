/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    for(i=0;i<grid.length;i++){
        for(j=0;j<grid[i].length;j++){
            if(grid[i][j] < 0){
                count ++
            }
        }
    }
    return count;
};