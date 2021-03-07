const empty = require("../init/empty");

function reshape(matrix, rows, cols) {
  let size = matrix.length * matrix[0].length;
  if (size % rows == 0 && size % cols == 0 && size / rows == cols) {
    let oned = empty(size, 1);
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        oned[counter] = matrix[i][j];
        counter++;
      }
    }
    let result = empty(rows, cols);
    counter = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        result[i][j] = oned[counter];
        counter++;
      }
    }
    return result;
  }
}

module.exports = reshape;
