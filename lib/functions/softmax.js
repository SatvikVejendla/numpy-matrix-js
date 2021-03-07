function sigma(inputs) {
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += Math.exp(inputs[i]);
  }
  return sum;
}

function softmax(inputs) {
  let sum = sigma(inputs);
  let outputs = inputs.map((i) => Math.exp(i) / sum);
  return outputs;
}

module.exports = softmax;
