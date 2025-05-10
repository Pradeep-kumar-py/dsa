// i am going to do number of rotation based on user input

let k = 4

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let left = arr.slice(k)
let copied = arr.slice(0, k)

let rotatedArray = [...left, ...copied]

console.log(copied);
console.log(left);
console.log(rotatedArray)



// now let do this with for loop


