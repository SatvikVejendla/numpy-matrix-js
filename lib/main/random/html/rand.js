import empty from "../../init/html/empty.js";

function rand(rows, cols) {
  let arr = empty(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr[i][j] = Math.random() * 2;
    }
  }
  return arr;
}

export default rand;
