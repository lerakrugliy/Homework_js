//let number = 1;
//while (number > 0 && number <= 10) {
//console.log(number);
//number += 1;
//}

for (let i = 2; i <= 20; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  //console.log(i);
}

for (let i = 1; i <= 10; i += 1) {
  //console.log(7 * i);
}

let n = 9;
let i = 1;

while (true) {
  if (i >= n) {
    break;
  }
  //console.log(i);
  i += 1;
}

let number = 1;
while (number <= 20) {
  if (number % 3 === 0) {
    number += 1;
    continue;
  }
  //console.log(number);
  number += 1;
}
