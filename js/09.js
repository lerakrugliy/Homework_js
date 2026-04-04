const logItemsn = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItemsn(["Mango", "Poly", "Ajax"]);

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const phrase = words.length * pricePerWord;
  return phrase;
};

const result = calculateEngravingPrice("Я дуже обожнюю джаваскрипт", 5);
console.log(result);

const findLongestWord = function (string) {
  const array = string.split(" ");
  let longestWord = array[0];
  for (const word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
const result2 = findLongestWord("Доброго дня вас вітає компанія Нестле");
console.log(result2);

const formatString = function (string) {
  if (string.length < 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};
const formatingString = formatString("Вітаємо та щиро дякуємо за ваш візит!");
console.log(formatingString);

const checkForSpam = function (message) {
  const lowerMessage = message.toLowerCase();
  if (
    lowerMessage.includes("sale") ||
    lowerMessage.includes("spam")
  ) {
    return "true";
  } else {
    return "false";
  }
};
let firstMessage = "І знову добрий день! Це повідомлення містить слова Spam";
let secondMessage =
  "І знову добрий день! Це повідомлення не містить жодного із цих слів!";
let thirdMessage = "І знову добрий день! Це повідомлення наявне на слово sale";
console.log(checkForSpam(firstMessage));
console.log(checkForSpam(secondMessage));
console.log(checkForSpam(thirdMessage));
