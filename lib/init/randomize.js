function randomize(matrix, range1 = 0, range2 = 1) {
  if (matrix) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = Math.random() * (range2 - range1) + range1;
      }
    }
    return matrix;
  } else {
    
  }
}

module.exports = randomize;
