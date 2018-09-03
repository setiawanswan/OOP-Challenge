const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const fetch = require('node-fetch');

const adapter = new FileSync('db.json')
const db = low(adapter)


class http {
    getlowdb () {
         let show = db.get('employees') //GET
        .write()
        return show
    }
    postlowdb () {
        let input = db.get('employees').push({id: 6, first_name: "Nanda", last_name:"kiw",email: "nandakiw@yahoo.com"}).write() //POST
        return input
    }

    removelowdb () {
        let del = db.get('employees').remove({id:5}).write() //REMOVE
        return del
    }
    updatelowdb () {
        let uptodate = db.get('employees').find({id:3}).assign({id:5}).write() //UPDATE
        return uptodate
    }
    //PATCH

    //OPTIONS

    //HEAD

    //PUT


}


let lowDB = new http()

// console.log(lowDb.getlowdb()) // GET

// console.log(lowDB.postlowdb())// POST

// console.log(lowDB.removelowdb())// DELETE

console.log(lowDB.updatelowdb())// UPDATE


   
    




