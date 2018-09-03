const fetch = require('node-fetch');
class json {
    constructor(){
        fetch('http://localhost:3000/employees')
        .then(Response => Response.json())
        .then(json => console.log(json));
    }
    postfetch(){
        fetch('http://localhost:3000/employees',{
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=utf-8"}, 
            body: JSON.stringify({
                // id: 2,
                first_name: "Steve",
                last_name: "Palmer",
                email: "steve@codingthesmartway.com"
            })
        
        })
    }
    getfetch(){
        fetch('http://localhost:3000/employees', {
            method: 'GET',
            headers: {},
            body: null,
        })
    }
    delfetch(){
        fetch('http://localhost:3000/employees/22',{
            method: 'DELETE',

        })
    }
    patchfetch(){
        fetch('http://localhost:3000/employees/24',{
            method: 'PACTH',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                first_name: 'masuk eko'
            })
        })
    }
    putfetch(){
        fetch('http://localhost:3000/employees/2', {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"}, 
            body: JSON.stringify({
                id: 2,
                first_name: "wawan",
                last_name: "swan",
                email: "swansea@codingthesmartway.com"
            })
        })
    }
    headfetch(){
        fetch('http://localhost:3000/employees',{
            method: 'HEAD',
        })
    }

            
    

}
let call = new json()

// call.postfetch()

// call.getfetch()

// call.delfetch()

// call.putfetch()

// call.patchfetch()

// call.updatefetch()

call.headfetch()







