# SHG
## Simple Hash Generator
---  
### 1. Encrypt and Decrypt
```javascript
const { encrypt, decrypt } = require('shg');

const encr = encrypt('hello', 'mysecret');
const decr = decrypt(encr, 'mysecret');

console.log(encr);
console.log(decr);
```  
Will return an output:  
> 0111d9e0512cffc7e544698841a90dea
   
> hello
---
### 2. Random Hex & Number Generator
```javascript
const { random } = require('shg');

const hex = random.hex(10);
const num = random.number(3);

console.log(hex);
console.log(num);
```  
Will return an output:
> f34a425084

> 825
---
### 3. Base64 Encode & Decode
```javascript
const { base64 } = require('shg');

const str = base64.encode('hi dude');

console.log(str);
console.log(base64.decode(str));
```  
Will return an output:
> aGkgZHVkZQ==

> hi dude
---
### 4. Generate Hash from String
```javascript
const { hash } = require('shg');

const str = 'hi dude';

console.log(hash.md5(str));
console.log(hash.sha1(str));
console.log(hash.sha256(str));
console.log(hash.sha512(str));
```  
Will return an output:
> 7351d714609366a02c513121a41401f3

> 622caecac7dc763fff53c3c1bdd0d440a0ff5bda

> 46c0a4890e0b5764b3582add51c142a9090cff1cde5d6ea3e0e12753118c1025

> d32b9c94a1b09a411c92a826462fb874db8a0f451393de33468d768a021c46030699aa177d5f4794ed9d05f51f5039ccaf3ec6fa723c5476e5bbf856e677453b
---
### 5. Generate HMAC Hash from String and Secret
```javascript
const { hmac } = require('shg');

const str = 'hi dude';
const secret = 'mysecret';

console.log(hmac.md5(str, secret));
console.log(hmac.sha1(str, secret));
console.log(hmac.sha256(str, secret));
console.log(hmac.sha512(str, secret));
```  
Will return an output:
> a7094559834fbc2a015493b62c2701df

> 58066b380a08ce57e5d0d6cb898d1690fa91d4ba

> d38236b80f7bf55068ec17b3904eb6fd4b8e8ed8a14bb8b6b3411bc9cda7a691

> 39d8626cd6d4a05dce3546f5447a9add6c8137951adb4598705ce0c37a96dde8e78dc04c792378c70790db16a7edf75b17c256d8657478a9228fa52e52f1bb66
---