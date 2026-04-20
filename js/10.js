const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const countItems = function (array, condition) {
    let count = 0;
    for (const element of array) {
        if (condition(element)) {
            count += 1;
    }
    }
    return count;
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


// Функція calculate тут
const calculate = (a, b, operation) => {
    const result = operation(a, b);
    return result;
}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "помилкa";
  }
  return a / b;
};

// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати 


function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i+= 1) {
    console.log(messageCreator(i));
  }
}

repeatMessage(3, (i) => i + 1);