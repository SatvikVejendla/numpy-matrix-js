const {
  debug,
  init,
  random,
  m_math,
  s_math,
  functions,
} = require("../../lib/exports/export");

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
