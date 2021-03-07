const empty = require("../init/empty");

function subtract(mA, mB) {
  let result = empty(mA.length, mA[0].length);

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = mA[i][j] - mB[i][j];
    }
  }
  return result;
}

module.exports = subtract;
