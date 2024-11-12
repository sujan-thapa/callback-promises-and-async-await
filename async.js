function asyncFunc(data1){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1: ", data1);
            resolve(data1);
        }, 2000);
    });
}

// await asyncFunc(1);


// async function getData(){
//     console.log("Fetching data1 ....")
//     await asyncFunc(1);
//     console.log("Fetching data2 ....")
//     await asyncFunc(2);
//     console.log("Fetching data3 ....")
//     await asyncFunc(3);


//     // console.log(data);


// }

// IIIFE - Immediately Invoked Function Expression
(async function getData(){
    console.log("Fetching data1 ....")
    await asyncFunc(1);
    console.log("Fetching data2 ....")
    await asyncFunc(2);
    console.log("Fetching data3 ....")
    await asyncFunc(3);


    // console.log(data);


})();