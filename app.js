// chaining promise
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function1");
            resolve("Success1");
        }, 5000);
    });
}

const asyncFunc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2");
            console.log("success2");
        }, 5000);
    });
}

// console.log("Fetching data from async function1")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// })

// console.log("Fetching data from async function2")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })

// chaining promise
console.log("Fetching data from async function1")
let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data from async function2")
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })

asyncFunc1().then((res) => {
    console.log(res);
    console.log("Fetching data from async function2")
    asyncFunc2().then((res) => {
        console.log(res);
    })
})















// // let promise = new Promise((resolve, reject) => {
// //     console.log("I am a promise");
// //     // resolve(123);
// //     reject(123);
// // });


// function getData(dataId){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             console.log("Fetching data from the server");
//             // reslove("Data Name");
//             let data = {  // This is the data that we are fetching from the server
//                 id: dataId,
//                 name: "Data Name"
//             };
//             // reslove(data) // This is the data that we are passing to the then block
//             reslove("success");
//         },5000);
//     });
// }



// 


// promises, then and catch

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Promise is created");
//         resolve("123");
//         // reject("Error");
//     });
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise is resolved",res);
// })
// promise.catch((err)=>{
//     console.log("Promise is rejected",err);
// });