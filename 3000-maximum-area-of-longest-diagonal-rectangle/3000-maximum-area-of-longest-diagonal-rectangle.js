/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
     let maxDiagSq = 0;
  let maxArea = 0;

  for (const [l, w] of dimensions) {
    const diagSq = l * l + w * w;
    const area = l * w;

    if (diagSq > maxDiagSq) {
      maxDiagSq = diagSq;
      maxArea = area;
    } else if (diagSq === maxDiagSq) {
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};