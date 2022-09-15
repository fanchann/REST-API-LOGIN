const crypto = require('crypto');

/**
 * @param {number} length Number of character generated
 * @return {string}
 */
exports.hex = (length) => {
  const len = parseInt(length);
  const random = crypto.randomBytes(len).toString("hex");
  return random.slice(0, len);
}

/**
 * @param {number} length Number of character generated
 * @return {number}
 */
exports.number = (length) => {
  let random = 0;
  let multiplier = "10";
  for (i = 0; i < length - 1; i++) {
    multiplier += "0";
  }
  random = parseInt(Math.random() * parseInt(multiplier));
  while (random.toString().length != length) {
    random = parseInt(Math.random() * parseInt(multiplier));
  }
  return random;
}