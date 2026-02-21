const result = 5 + 5 + "5";
console.log(result, typeof result);


const email = "leokrugliy@gmail.com";
console.log(email.includes("@"), email.length);


const myName = "My";
const name = "name";
const isName = "is";
const fullName = myName + " " + name + " " + isName + " " + "Victor";
console.log(fullName);


const userName = "Віктор";
const payment = 1287;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);


const personalName = "Круглій Валерія";
console.log(personalName.indexOf(" "));


const blacklistedWord1 = "спам";
const blacklistedWord2 = "розпродаж";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна кампанія #jsIsAwesome";

console.log(string1.toLowerCase().includes(blacklistedWord1), string1.toLowerCase().includes(blacklistedWord2));
console.log(string2.toLowerCase().includes(blacklistedWord1), string2.toLowerCase().includes(blacklistedWord2));
console.log(string3.toLowerCase().includes(blacklistedWord1), string3.toLowerCase().includes(blacklistedWord2));

const fruit = "апельсин";
const lastIndex = fruit.length - 1;
const lastSymbol = fruit[lastIndex];
console.log(lastSymbol);
