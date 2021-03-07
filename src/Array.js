Object.defineProperty(Array.prototype, "randomize", {
  value: function (range1 = 0, range2 = 1) {
    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < this[i].length; j++) {
        this[i][j] = Math.random() * (range2 - range1) + range1;
      }
    }
  },
});

/*Object.defineProperty(Array.prototype, "T", {
  value: this,
});
*/
