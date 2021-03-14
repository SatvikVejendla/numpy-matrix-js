const empty = require("../../lib/main/init/npm/empty");

Object.defineProperty(Array.prototype, "randomize", {
  value: function (range1 = 0, range2 = 1) {
    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < this[i].length; j++) {
        this[i][j] = Math.random() * (range2 - range1) + range1;
      }
    }
  },
});

Object.defineProperty(Array.prototype, "reshape", {
  value: function reshape(rows, cols) {
    let size = this.length * this[0].length;
    if (size % rows == 0 && size % cols == 0 && size / rows == cols) {
      let oned = empty(size, 1);
      let counter = 0;
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
          oned[counter] = this[i][j];
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
  },
});

Object.defineProperty(Array.prototype, "map", {
  value: function (func) {
    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < this[i].length; j++) {
        let val = this[i][j];
        this[i][j] = func(val);
      }
    }
  },
});

Object.defineProperty(Array.prototype, "multiply", {
  value: function (m2) {
    if (m2.constructor == Number) {
      for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
          this[i][j] *= m2;
        }
      }
    } else {
      for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
          this[i][j] *= m2[i][j];
        }
      }
    }
  },
});
