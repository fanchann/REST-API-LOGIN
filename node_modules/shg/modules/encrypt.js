const crypto = require('crypto');

/**
 * @param {string} text Plain text
 * @param {string} secret Secret key that you needed when you decrypt the encrypted text
 * @return {string} Return an encrypted text
 */
module.exports = (text, secret) => {
  if (text == null || text == undefined) {
    console.log("Encrypt error: Parameter \'text\' is required!");
    return;
  } else if (secret == null || secret == undefined) {
    console.log("Encrypt error: Parameter \'secret\' is required!");
    return;
  }

  const algorithm = "aes-256-cbc";
  const password = crypto.scryptSync(secret, secret, 32);
  const iv = Buffer.alloc(16, 0);

  const cipher = crypto.createCipheriv(algorithm, Buffer.from(password), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}