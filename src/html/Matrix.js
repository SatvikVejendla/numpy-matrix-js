import np from "../../lib/exports/html/export.js";

export default {
  zeros: np.init.zeros,
  random: np.random,
  matmul: np.m_math.multiply,
  transpose: np.s_math.transpose,
  sigmoid: np.functions.sigmoid,
  dsigmoid: np.functions.dsigmoid,
  softmax: np.functions.softmax,
  tanh: np.functions.tanh,
  subtract: np.m_math.subtract,
  add: np.m_math.add,
};
