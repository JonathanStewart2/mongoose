'use strict';

//Create three async functions called asyncFunction<1,2,3>
//Ensure each returns a new promise
//Declare a setTimeout() method in each
//In the body of the timed interval log the name of the function
//Set the corresponding time to the functions -
// AsyncFunction1 = 3 second, AsyncFunction2 = 2 seconds, 
// AsyncFunction3 = 1 seconds
//Create a function called doThings() and run each AsyncFunction 
// in order and finally print to the screen All Done!


async function asyncFunction1(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done 1"),3000);
    });
    let result = await promise;
    console.log(result);
}

async function asyncFunction2(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done 2"),2000);
    });
    let result = await promise;
    console.log(result);
}

async function asyncFunction3(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done 3"),1000);
    });
    let result = await promise;
    console.log(result);
}

async function main(){
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
    console.log("All Done");
}

main();



// SOLUTION ----------
// async function asyncFunction1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Async function 1');
//             resolve();
//         },3000);
//     });
//   }

//   async function asyncFunction2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Async function 2');
//             resolve();
//         },2000);
//     });
//   }

//   async function asyncFunction3() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Async function 3');
//             resolve();
//         },1000);
//     });
//   }


// async function doThings() {
//     await asyncFunction1();
//     await asyncFunction2();
//     await asyncFunction3();
//     return "All done";
// }
// doThings().then(console.log);