const empty = require("../../init/npm/empty.js");

function transpose(matrix) {
  let result = empty(matrix[0].length, matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
module.exports = transpose;
