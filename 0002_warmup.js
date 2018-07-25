let a = `backticks`;
let b = "double quotes";
let c = 'single quotes';
let d = 100;
console.log(typeof a, typeof b, typeof c, typeof d); // string string string number
console.log(`half of 100 is ${100 / 2}`); // half of 100 is 50
console.log("half of 100 is ${100 / 2}"); // half of 100 is ${100 / 2}
console.log('half of 100 is ${100 / 2}'); // half of 100 is ${100 / 2}
console.log(`value of a = ${d}`); // value of a = 100

if (typeof d === 'number') {
    console.log('type of d is number'); // type of d is number
}

console.log(typeof 0); // number
console.log(typeof 3.14); // number
console.log(typeof -1); // number
console.log(typeof Infinity); // number
