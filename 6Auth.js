
const validator = require('validator')

class auth {
    constructor(){
        this.user = {
            "id": 1,
            "username": "swan",
            "password": "110298",
            "lastlogin": new Date('2018,09,03')
        }
    }
    loginAuth(data){
        this.userid = data
            if(this.userid.username === this.user.username && this.userid.password === this.user.password){
                console.log('Berhasil')
            }else{
                console.log('Gagal')
        }
    
    }
    validateAuth(kiw){
        this.obj = kiw 
        const nama = validator.isAlphanumeric(this.obj.username)
        const pass = validator.isAlphanumeric(this.obj.password)
        console.log(nama)
        console.log(pass)
    }
    
    logoutAuth(){
        return delete this.user.id && delete this.user.username && delete this.user.password && delete this.user.lastlogin
    }

    userAuth(){
        console.log(this.user)
    }

    idAuth(){
        console.log(this.user.id)
    }
    
    checkAuth(){
        if(this.user.username && this.user.password){
            return true
        }else{
            return false
        }
    }
    
    guestAuth(){
        return !this.checkAuth()
    }

    lastloginAuth() {
        console.log(this.user.lastlogin)
    }


}
let test = new auth()
// test.loginAuth({'username':'swan','password':'110298'})
// test.validateAuth({'username':'swan','password':'110298wa@gmail.com'})
// console.log(test.logoutAuth())
// test.userAuth()
// test.idAuth()
// console.log(test.checkAuth())
// console.log(test.guestAuth())
test.lastloginAuth()
// console.log(test)