const crypto = require('crypto');

/**
 * @param {string} text Encrypted text
 * @param {string} secret Secret key that you used when you encrypt the plain text
 * @return {string} Return an decrypted text
 */
module.exports = (text, secret) => {
  if (text == null || text == undefined) {
    console.log("Decrypt error: Parameter \'text\' is required!");
    return;
  } else if (secret == null || secret == undefined) {
    console.log("Decrypt error: Parameter \'secret\' is required!");
    return;
  }

  try {
    const algorithm = "aes-256-cbc";
    const password = crypto.scryptSync(secret, secret, 32);
    const iv = Buffer.alloc(16, 0);
  
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(password), iv);
    let decrypted = decipher.update(text, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (e) {
    console.log(e.toString());
    return;
  }
}