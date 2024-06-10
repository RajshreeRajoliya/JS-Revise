
// let e = 90
// function sum(a){
//  return function (b){
//     return function(c){
//         return function(d){
           
//               return a + b + c + d +  e
            
//         }
//     }
//  }
// }
// console.log(sum(1)(2)(3)(4))





// let e = 90

// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a + b + c + d + e
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4))


// function ctreateBase(a){
//     return function(b){
// return a + b
//     }
// }



// let addSix = ctreateBase(6)
// console.log(addSix(10))
// console.log(addSix(20))


// function counter(){
//     var c = 0

//    return function check(){
//      return c++
//     }
   
// }
// let ans = counter()
// console.log(ans())
// console.log(ans())



// function subscribe(){
// let called = 0
// return function(){
// if(called > 0){
//     console.log("Already subscribed")
// } else {

//     let view = "Roadside Coder"
//     console.log("Subscribe to " + view)
//     called++
// }
// } 

// }

// let ans = subscribe()
// ans()
// ans()
// ans()

