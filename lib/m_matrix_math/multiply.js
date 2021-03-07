const empty = require("../init/empty");

function multiply(a, b) {
  if (a.cols != b.rows) {
    console.log("Columns must match rows");
    return undefined;
  }
  let result = empty(a.length, b[0].length);

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      let sum = 0;
      for (let k = 0; k < b.length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

module.exports = multiply;
