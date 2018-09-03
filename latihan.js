// let promiseClean = new Promise(function(resolve, reject){

//     let isClean = false;

//     if (isClean) {
//         resolve('Clean');
//     } else {
//         reject('Ditry');
//     }
// })

// promiseClean.then(function(fromResolve){        // The then() method returns a Promise
//     console.log('The room is ' + fromResolve)
// }).catch(function(fromReject){                  // Return promise with Reject cases only
//     console.log('The room is ' + fromReject)
// })

// let CleanRoom = function(){
//     return new Promise(function(resolve,reject){
//         resolve(' Cleaned the room ');
//     });
// }

// let RemoveGarbage = function(message){
//     return new Promise(function(resolve,reject){
//         resolve(message + 'remove Garbage ');
//     });
// }

// let winIceCream = function(message){
//     return new Promise(function(resolve,reject){
//         resolve(message + 'won Ice Cream');
//     });
// }

// CleanRoom().then(function(result){
//     return RemoveGarbage(result);
// }).then(function(result){
//     return winIceCream(result)
// }).then(function(result){
//     console.log('finished' + result)
// })

function calculate() {
    var price= 40;
    var discount= 0;
    var afterDiscount= 0;
 /*    price = Number(document.discountCalculator.price.value);*/
       numberOfMembers = Number(document.discountCalculator.value);
     discount = Number(document.discountCalculator.discount.value);
 
 
  afterDiscount=price - ( price*discount/100 );
 
 
 /*   document.discountCalculator.price.value=price.toFixed(2);*/
    document.discountCalculator.discount.value=discount.toFixed(2);
    document.discountCalculator.afterDiscount.value=afterDiscount.toFixed(2);
 
 
}
calculate()