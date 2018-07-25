let arr = [10, 20, 30, 40];

console.log(Math.max(1, 2)); // 2
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 40

console.log(Math.min(1, 2)); // 1
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(arr)); // NaN
console.log(Math.min(...arr)); // 10