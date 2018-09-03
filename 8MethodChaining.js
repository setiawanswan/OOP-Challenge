const fs = require('fs')

class cart {
    constructor(){
        this.items = []
        
    }

    add (item){
        this.items.push(item);
        return this
   }
   remove (del){ 
       this.items = this.items.filter(item => item.item_id  != del.item_id );
       return this
    
    } 
    totalitem(){
        const plus = this.items.map(high => high.item_id)
        const add = (x,y) => x + y
        return plus.reduce(add)
    }
    totalquantity(){
        const high = this.items.map(high => high.quantity)
        const plus = (a,b) => a + b 
        return high.reduce(plus)

    }
    
    
    totalprice(){
        if(this.discount > 0) {
            this.getdiscount(this.discount)
            return this.price
        } else{
            this.newmethod()
            return this.price
        }

    
    }
    newmethod(){
        const total = this.items.map(total => total.quantity * total.price)
        const result = (c,d) => c + d
        this.price = total.reduce(result)
        return this.price
    }
    getdiscount(discount){
        this.discount = discount

        this.price = this.newmethod() - (this.newmethod() * discount ) / 100
    }
    showall(){
        return this.items
    }
    storedata(){
        fs.writeFile('cart.txt', JSON.stringify(one),function (err) {
            if (err) throw err
            console.log('The file has been stored')
        }
           
        )
    }

}
let one = new cart();
    one.add({ item_id: 1, price: 30000, quantity: 3 })
    .add({ item_id: 2, price: 10000, quantity: 0 })               // By default quantity is 1
    .add({ item_id: 3, price: 5000, quantity: 2 })
    .add({ item_id: 4, price: 400, quantity: 6 })
    .getdiscount(50)
    

// console.log(one)
// console.log(one.remove({item_id: 2})) 
// console.log(one.totalquantity())
// console.log(one.totalitem())
// console.log(one.jumlah())
console.log(one.totalprice())
// console.log(one.showall())
// one.storedata()



// one.totalprice()

// one.totalitems()

// one.totalquantity()

// one.discount()





    


// class cart {
//     constructor(item,price,quantity){
//         this.item = item;
//         this.price = price;9
//         this.quantity = quantity;
//     }
// }

// class chaining extends cart{
//     constructor(item,price,quantity){
//         super(item,price,quantity);
//     }
//     addItems(item){
//         this.item =item;
//     }

//     addPrices(price){
//         this.price = price;
//     }

//     addQuantity(quantity){
//         this.quantity = quantity;
//     }

//     get getnew(){
//         return this.price + this.quantity;
//     }
// }
// let baru = new chaining(1,30000,3);

// console.log(baru)

