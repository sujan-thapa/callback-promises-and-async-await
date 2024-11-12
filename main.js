// function getData(dataId,getNextData) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             console.log("Fetching data from the server",dataId);
//             reslove("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 3000);
//     });
// }

function getData(dataId) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Fetching data from the server",dataId);
            reslove("success");
            
        }, 3000);
    });
}

// getData(1).then((res)=>{
//     console.log(res);
//     // return getData(2);
//     getData(2).then((res)=>{
//         console.log(res);
//         getData(3).then((res)=>{
//             console.log(res);
//         })
//     })
// })

getData(1).then((res)=>{
    console.log(res);
    return getData(2);  // return promise object from getData(2) function 
}).then((res)=>{
    console.log(res);
    return getData(3);
}).then((res)=>{
    console.log("success");
});