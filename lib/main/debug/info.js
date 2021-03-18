function info(matrix) {
  if (matrix[0].constructor == Array) {
    console.log(matrix.length + " x " + matrix[0].length);
  } else {
    console.log(matrix.length);
  }
}

export default info;
