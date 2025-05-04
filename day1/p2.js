// swap the no

let a = 10
let b = 20

// 1st method
let c;

// c = a // c = 10 a= 10
// a = b // a = 20
// b = a

// without extra variable

// a = a + b // a = 30
// b = a - b // b = 10
// a = a - b // a = 20;

// 3 rd method 

[a, b] = [b, a];
console.log(a,b)
