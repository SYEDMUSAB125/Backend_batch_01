// Asynchoronous programming
// callback hell 
// pyramid of dom 
// function add(a,b,cb){
//    setTimeout(()=>{
//          console.log(a+b)
//          cb()
//    },5000)
    
// }
//  let callBack = ()=>{
//  console.log("done");
//  }
// add (2,3, callBack(()=>{
//     console.log("done 2")
//     ()=>{
//         console.log("done 2")
//     }
//     ()=>{
//         console.log("done 2")
//     }
//     ()=>{
//         console.log("done 2")
//     }
//     ()=>{
//         console.log("done 2")
//     }
//     ()=>{
//         console.log("done 2")
//     }
//     ()=>{
//         console.log("done 2")
//     }
//     ()=>{
//         console.log("done 2")
//     }
// }) )
// console.log('start')
// console.log('start1')

// console.log('start3')
// promise 
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("kam chalra hai or agar kch samjh nahia sra hai tw pocho")
//         // resolve("done")
//         reject("error achuka hai")
//     },2000)
// })
// // throw new Error("error")
// promise.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     throw new Error(err)
// })

// Async Await 

async function add(a, b) {
   await setTimeout(() => {
        console.log(a + b)
    }, 5000)
    console.log("kam hora hai")

}
add(2, 3)


// console.log("this is mudassir")
// setTimeout(()=>{
//     console.log("this is sohaira")
// },2000)
// console.log("this is arham")