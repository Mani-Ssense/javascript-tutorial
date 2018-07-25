let a = 1;
while (a <= 3) {
    console.log(a);
    a++;
}
/*
1
2
3
*/
let b = 1;
do {
    console.log(b);
    b++
} while (b <=3);
/*
1
2
3
*/
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
/*
1
2
3
*/
for (let current = 18; ; current++) {
    if (current % 7 == 0) {
      console.log(current); // 21
      break;
    }
}

const str = 'cloudy';
switch (str) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside."); // Go outside.
      break;
    default:
      console.log("Unknown weather type!");
      break;
}
