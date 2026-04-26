const bankAccount = {
    ownerName: "Valeria",
    accountNumber: 5465467,
    balance: 1000,
    deposit(amount) {
     this.balance += amount;
     console.log(this.balance);
    },
    withdraw(amount) {
     this.balance -= amount;
     console.log(this.balance);
  }
};
bankAccount.deposit(500);
bankAccount.withdraw(200);

const weather = {
  temperature: 6,
  humidity: 35,
  windSpeed: 14,

  isBelowZero() {
    return this.temperature < 0;
  }
};

if (weather.isBelowZero()) {
  console.log("true");
} else {
  console.log("false");
}

const user = {
  name: "Valeria",
  email: "hggyiliy@gmail.com",
  password: "12345",

  login(inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
};

user.login("hggyiliy@gmail.com", "12345");
user.login("tjggyu@gmail.com", "11111");


const movie = {
  title: "Harry Potter",
  director: "Chris Columbus",
  year: 2001,
  rating: 7.7,

  checkRating() {
    return this.rating > 8;
  }
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);

console.log(movie.checkRating());