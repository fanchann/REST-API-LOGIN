const crypto = require('crypto');

/**
 * @param {string} text Plain text
 * @return {string} Return a MD5 hash
 */
exports.md5 = (text) => {
  return crypto.createHash("md5").update(text, "utf8").digest("hex");
}

/**
 * @param {string} text Plain text
 * @return {string} Return a SHA1 hash
 */
exports.sha1 = (text) => {
  return crypto.createHash("sha1").update(text, "utf8").digest("hex");
}

/**
 * @param {string} text Plain text
 * @return {string} Return a SHA256 hash
 */
exports.sha256 = (text) => {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

/**
 * @param {string} text Plain text
 * @return {string} Return a SHA512 hash
 */
exports.sha512 = (text) => {
  return crypto.createHash("sha512").update(text, "utf8").digest("hex");
}