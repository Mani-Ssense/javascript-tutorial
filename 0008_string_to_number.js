let a = "20";
console.log(typeof a); // string
console.log(a === 20); // false

a = Number(a);
console.log(typeof a); // number
console.log(a === 20); // true

let b = "not hotdog!";
b = Number(b);
console.log(b); // NaN
console.log(isNaN(b)); // true
