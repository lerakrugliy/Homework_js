let array1 = [2, 3, 4];
array1[1] = 10;
console.log(array1);

let array2 = ["apple", "pear", "banana"];
array2[3] = "orange";
console.log(array2);

const array3 = [5, 10, 20, 32];
let sum = 0
for (const num of array3) {
    sum += num;
}

console.log(sum);

const array4 = [8, 2, 6, 1, 5];
for (let i = 0; i < array4.length; i += 1) {
    console.log(array4[i]);
}

const array5 = ["sociable", "try", "come", "flower", "land"];
for (const str of array5) {
    if (str.length > 5) {
        console.log(str); 
    }
}

const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let max = array6[0];
for (const num of array6) {
    if (num > max) {
        max = num;
    }
}
console.log(max);


const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (const number of array7) {
     if (number % 2 == 0) {
        console.log(number);
     }
}