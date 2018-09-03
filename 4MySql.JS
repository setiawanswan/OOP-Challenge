const mysql = require('mysql');

class database {
    constructor(){
        
        
        this.mysqlConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'telkom_university'
        });
        
        this.mysqlConnection.connect();
        
    }
    createsql(){
            let newData = {Full_Name: 'Kiki', NIM: 1201163393, Gender: 'P', Address:'Jalan Kaki'};
        this.mysqlConnection.query('INSERT INTO `tabel_mahasiswa` SET ?' ,newData, function(error,results,field){
        if (error) throw error;
        console.log("Succes Input");
        });

            this.mysqlConnection.end(); 
    }
    redsql(){
        this.mysqlConnection.query('SELECT * FROM `tabel_mahasiswa` ',function (error, result,fields){
                if (error) throw error;
                console.log('Yeah I get My database', result);
            });
        this.mysqlConnection.end();
    }
    deletesql () {
        this.mysqlConnection.query('DELETE FROM `tabel_mahasiswa` where NIM = 1201163393 ',function (error, result,fields){
            if (error) throw error;
            console.log('Delete Finish');
        });
        this.mysqlConnection.end();
    }
    updatesql(){
        this.mysqlConnection.query('UPDATE `tabel_mahasiswa` set Full_Name = "Barongsai" where NIM = "1201163392"',function (error,result, fields){
            if (error) throw error;
            console.log('Update Done');
        })



    }
}


let run = new database()

// run.createsql() //CREATE
// run.redsql() // RED
// run.deletesql() // DELETE
run.updatesql() /// UPDATE




