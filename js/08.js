const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i+= 1) {
    string += friends[i];
    if (i !== friends.length - 1) {
        string += ", ";
    }
}
console.log(string);

const friends1 = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(friends1.join(", "));

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];
const cardToRemove = 'Карточка-3';
const indexCard = cards.indexOf(cardToRemove);
if (indexCard !== -1) {
    cards.splice(indexCard, 1);
}
console.log(cards);

const cardToInsert = 'Карточка-6';
cards.push(cardToInsert);
console.log(cards);

const cardIUpdate = 'Карточка-4' ;
const indexUpdateCard =  cards.indexOf(cardIUpdate);
const newCard = "Супер карточка 4";
if (indexUpdateCard !== -1) {
    cards.splice(indexUpdateCard, 1, newCard);
}
console.log(cards);
