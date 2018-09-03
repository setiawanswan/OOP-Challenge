let validator = require('validator');

class Validation {
    constructor(username,email,name,zip,is_admin,age){
        this.username = username;
        this.email = email;
        this.name = name;
        this.zip = zip;
        this.is_admin = is_admin;
        this.age = age;
    }
    fails (){
        this.username = validator.isAlphanumeric(this.username);
        this.email = validator.isEmail(this.email);
        this.name = validator.isAlphanumeric(this.name);
        this.zip = validator.isPostalCode(this.zip,'FR');
        this.is_admin = validator.isBoolean(this.is_admin);
        this.age = validator.isInt(this.age);
    }

    message() {
        if(this.username == true){
            console.log('Valid');
        }else {
            console.log('Is not Valid')
        }

        if(this.email == true){
            console.log('Valid');
        }else{
            console.log('Is not Valid');
        }
        
        if(this.name == true){
            console.log('Valid');
        }else {
            console.log('Is not Valid');
        }

        if(this.zip == true){
            console.log('Valid');
        }else{
            console.log('Is not Valid');
        }

        if(this.is_admin == true){
            console.log('Valid');
        }else {
            console.log('Is not Valid');
        }
        if(this.age == true){
            console.log('Valid');
        }else{
            console.log('Is not Valid');
        }
    }

    passes(){
        return this.username && this.email && this.name && this.zip && this.is_admin && this.age
        
    }

    errors(){
        return !this.passes()
    }
    
}
let check = new Validation('setiawanswan','aaaagmail.com','wawan','11233','true','12')
check.fails()
check.message()
console.log(check.passes())
console.log(check.errors())


// let kiw = validator.isEmail(data);
// console.log(kiw)