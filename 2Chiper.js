const CryptoJS = require('crypto-js');

class Ciper {
    static encrypt(random,mix){
        return CryptoJS.AES.encrypt(random,mix)
    
    
    }
    static decrypt(generate,change){
        const a = CryptoJS.AES.decrypt(generate,change)
        return a.toString(CryptoJS.enc.Utf8)
    }

}
const message = Ciper.encrypt('Ini tulisan','p4$$w0rd')
// console.log(message)
const decryptmessage = Ciper.decrypt(message,'p4$$w0rd')
console.log(decryptmessage)



