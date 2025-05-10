// i am going to do number of rotation based on user input

// let k = 4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let left = arr.slice(k)
// let copied = arr.slice(0, k)

// let rotatedArray = [...left, ...copied]

// console.log(copied);
// console.log(left);
// console.log(rotatedArray)



// now let do this with for loop

// how can i do this this is a good question 
// let think how can we can do this how 

let k = 2

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let copied;

for (let i = 0; i < k; i++) {
    copied = arr[0]
    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j + 1]
    }
    console.log(copied)
    arr[arr.length - 1] = copied
}

console.log(arr)
