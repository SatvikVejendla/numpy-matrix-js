import empty from "./empty.js";

function zeros(rows, cols) {
  if (!cols) {
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  } else {
    let matrix = empty(rows, cols);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  }
}

export default zeros;
