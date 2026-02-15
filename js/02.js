const celsius = 33;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log(minutesInMonth);

let health = 87;
let energy = 12;
health -= 81;
energy -= 4;
console.log(health);
console.log(energy);

const totalPrice = 500;
const discount = 0.1;
const discountedPrice = totalPrice - (totalPrice * discount);
console.log(discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
const parsedFloat =  parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

const number = 1600;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = integer.toString();
console.log(convertedInt);
console.log(convertedString);