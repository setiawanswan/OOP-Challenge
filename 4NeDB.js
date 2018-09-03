let NeDB = require('nedb');

// db = new NeDB({filename: '4NeDB.txt', autoload: true});

class use {
    constructor() {
        this.db = new NeDB({filename: '4NeDB.txt', autoload: true})
    }
    removeNedb () {
        this.db.remove({NIM: '1201163387'})
        console.log('Delete Done')
        
    }
    updateNedb () {
        this.db.update({Full_Name: 'Bahenol'},{ $set: {Full_Name: 'Bohai'}})
        console.log('Update Done')
    }
    createNedb () {
        let newData = {
            Full_Name: 'Barongsai',
            NIM: '1201163394',
            Gender: 'P',
            Address: 'Jalan Keramat'
        }
        this.db.insert(newData)
        console.log('Succes Input')
        
    }
    getNedb () {
       return new Promise((resolve,reject) => {
           this.db.find({}, function(error,docs){
               resolve(docs)
            //    console.log('Look at that')
           }) 
       })
    }
} 
let running = new use()

running.removeNedb()

// running.updateNedb()

// running.createNedb()

// running.getNedb().then((result) => console.log(result))





//Create
// let newData = {
//     Full_Name: 'Barong',
//     NIM: '1201163388',
//     Gender: 'L',
//     Address: 'Jalan lagi di aspal'
// };
// db.insert(newData, function(err, data) {
//     if (err) throw err 
//     console.log(newData)
// });

// //Remove
// db.remove({NIM: '1201163385'},{}, function(err, numRemoved){
// })

// //Update
// db.update({Full_Name: 'Bahenol'},{ $set: {Full_Name: 'Bohai'}}, function (err, numReplaced){
// })

// //RED
// db.find
