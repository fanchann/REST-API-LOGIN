const crypto = require('crypto');

/**
 * @param {string} text Plain text
 * @param {string} secret Secret key
 * @return {string} Return a MD5 hash
 */
exports.md5 = (text, secret) => {
  return crypto.createHmac("md5", secret).update(text).digest("hex");
}

/**
 * @param {string} text Plain text
 * @param {string} secret Secret key
 * @return {string} Return a SHA1 hash
 */
exports.sha1 = (text, secret) => {
  return crypto.createHmac("sha1", secret).update(text).digest("hex");
}

/**
 * @param {string} text Plain text
 * @param {string} secret Secret key
 * @return {string} Return a SHA256 hash
 */
exports.sha256 = (text, secret) => {
  return crypto.createHmac("sha256", secret).update(text).digest("hex");
}

/**
 * @param {string} text Plain text
 * @param {string} secret Secret key
 * @return {string} Return a SHA512 hash
 */
exports.sha512 = (text, secret) => {
  return crypto.createHmac("sha512", secret).update(text).digest("hex");
}