//Factorials

//Reverse Factorial Problem
const factorial = (n) => {
    if (n < 1 || typeof(n) !== "number"){
        return "None"
    }
    let number = n;
    let start = 1;
    while (number > 1){
        start++;
        if (number%start !== 0){
            return "None"
        } else {
            number = number/start 
        }
    }
    return start
}

module.exports = factorial;



// const recursiveFactorial = (n, s) => {
//     if (n%2 !== 0){
//         return "None"
//     } else if (n == 1){
//         return s
//     } else {
//         console.log(n, s);
//         n = n/s
//         s += 1
//         return recursiveFactorial(n, s)
//     }
// }

// console.log(`120 is ${recursiveFactorial(120,2)}`);