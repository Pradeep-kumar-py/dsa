
// here i am going to solve the rotation of array 

let arr = [1, 2, 3, 4, 5]
console.log(arr.length)
let copy = arr[0]

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i+1]
}
arr[arr.length-1] = copy

console.log(arr)