//Library MD5
let md5 = require('md5');

//Library sha1
let sha1 = require('js-sha1')

//Library sha256
let sha256 = require('js-sha256')

//Library sha512
let sha512 = require('js-sha512')


class Hash {
    static md5(random){
        return random
    }
    static sha1(mix){
        return mix
    }
    static sha256(combine){
        return combine
    }
    static sha512(generate){
        return generate
    }
}

// console.log(md5('create'))
console.log(md5(Hash.md5('secret')))
console.log(sha1(Hash.sha1('secret')))
console.log(sha256(Hash.sha256('secret')))
console.log(sha512(Hash.sha512('secret')))