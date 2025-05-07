// pattern printing 

let prompt = require('prompt-sync')()

let n = prompt("enter a number: ")

// i have to print a right angle triangle 

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }


// for (let i = 0; i < n; i++) {
//     let assci = 65
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(assci) +" ")
//         assci++
//     }
//     console.log()
// }


// inverted right angle triangle 

// for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }



// a square

// for (let i = 1; i<=n; i++) {
//     for (let j = 0; j < n; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// mirror of right angle triangle 

for (let i = n; i >= 1; i--) {
    for (let j = i-1; j>=1; j--) {
        process.stdout.write("  ")
    }
    for(let k = i; k<=n; k++){
        process.stdout.write("* ")
    }
    console.log()
}


// To do make a triangle  hw


// let make a x symbole 


