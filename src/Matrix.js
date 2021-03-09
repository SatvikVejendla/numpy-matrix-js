const {
  conversion,
  debug,
  init,
  random,
  m_math,
  s_math,
  functions,
  map,
} = require("../lib/export");

class Matrix {
  constructor(rows, cols) {
    let arr = init.empty(rows, cols);
    arr = init.zeros(rows, cols);
    return arr;
  }

  static zeros(rows, cols) {
    return init.zeros(rows, cols);
  }

  /*static subtract(a, b) {
    if (a[0].constructor === Array && b[0].constructor === Array) {
      if (a[0].length == b[0].length && a.length == b.length) {
        let result = new Matrix(a.length, a[0].length);
        for (var i = 0; i < a.length; i++) {
          for (var j = 0; j < a[0].length; j++) {
            result[i][j] = a[i][j] - b[i][j];
          }
        }
        return result;
      } else {
        console.log("ERROR! Your arrays don't match in size.");
      }
    } else if (a[0].constructor === Array && b.constructor === Number) {
      let result = new Matrix(a.length, a[0].length);
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          result[i][j] = a[i][j] - b;
        }
        return result;
      }
    } else if (a.constructor === Array && b.constructor === Number) {
      let result = new Matrix(a.length, 1);
      for (let i = 0; i < a.length; i++) {
        result[i] = a[i] - b;
      }
      return result;
    } else if (
      a.constructor === Array &&
      b.constructor === Array &&
      a[0].constructor === Number &&
      b[0].constructor === Number
    ) {
      if (a.length == b.length) {
        let result = new Matrix(a.length, 1);
        for (let i = 0; i < a.length; i++) {
          result[i] = a[i] - b[i];
        }
        return result;
      } else {
        console.log("ERROR! Your arrays don't match in size.");
      }
    } else {
      console.log(
        `Cannot subtract invalid array sizes. One has a size of ${a.length} x ${
          a[0].length
        } and another has a size of ${b.length} x ${
          b[0].constructor === Number ? "1" : b[0].length
        }.`
      );
    }
  }

  static multiply(n) {
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] *= n.data[i][j];
        }
      }
    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] *= n;
        }
      }
    }
  }

  static map(func) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        let val = this.data[i][j];
        this.data[i][j] = func(val);
      }
    }
  }
  static map(matrix, func) {
    let result = new Matrix(matrix.rows, matrix.cols);
    for (var i = 0; i < matrix.rows; i++) {
      for (var j = 0; j < matrix.cols; j++) {
        let val = matrix.data[i][j];
        result.data[i][j] = func(val);
      }
    }
    return result;
  }

  static fill(val = 0) {
    init.fill(this, val);
  }

  static add(n) {
    if (n instanceof Matrix) {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

  static table() {
    debug.table(this);
  }

  static info() {
    debug.info(this);
  }*/
}

module.exports = {
  zeros: init.zeros,
  random: random,
  matmul: m_math.multiply,
  transpose: s_math.transpose,
  sigmoid: functions.sigmoid,
  dsigmoid: functions.dsigmoid,
  softmax: functions.softmax,
  tanh: functions.tanh,
  subtract: m_math.subtract,
  add: m_math.add,
};
