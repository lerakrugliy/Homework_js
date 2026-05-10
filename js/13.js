const user = {
  name: "Valeria",
  age: 14,
  hobby: "reading",
  premium: true,
};

const { name: nameUser, age, hobby, premium } = user;
console.log(nameUser, age, hobby, premium);

const employeesTasks = {
  Sam: 20,
  Dean: 24,
  Anna: 28,
};

const { Sam, Dean, Anna } = employeesTasks;
console.log(Sam, Dean, Anna);

const salaries = {
  Sam: 10000,
  Dean: 15000,
  Anna: 20000,
};

const { Sam: salarySam, Dean: salaryDean, Anna: salaryAnna } = salaries;
console.log(salarySam, salaryDean, salaryAnna);

const usersArray = [user, { name: "Sam", age: 30 }, { name: "Dean", age: 22 }];

const [
  ,
  { name: nameFirst, age: ageFirst },
  { name: nameSecond, age: ageSecond },
] = usersArray;
console.log(nameFirst, ageFirst, nameSecond, ageSecond);

const products = [
  { name: "apple", price: 50, quantity: 3 },
  { name: "banana", price: 40, quantity: 5 },
  { name: "pineapple", price: 80, quantity: 2 },
];

const [
  {
    name: nameProductFirst,
    price: priceProductFirst,
    quantity: quantityProductFirst,
  },
  {
    name: nameProductSecond,
    price: priceProductSecond,
    quantity: quantityProductSecond,
  },
  {
    name: nameProductThird,
    price: priceProductThird,
    quantity: quantityProductThird,
  },
] = products;
console.log(
  nameProductFirst,
  priceProductFirst,
  quantityProductFirst,
  nameProductSecond,
  priceProductSecond,
  quantityProductThird,
  nameProductThird,
  priceProductThird,
  quantityProductThird,
);

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return `${id} не знайдено`;
  },
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log("Transaction 1: ");
console.log(account.getTransactionDetails(1));
console.log("Transaction 3: ");
console.log(account.getTransactionDetails(3));
console.log("Transaction 4: ");
console.log(account.getTransactionDetails(4));

console.log(
  "Withdrawals: " + account.getTransactionTotal(Transaction.WITHDRAW),
);
console.log("Deposits: " + account.getTransactionTotal(Transaction.DEPOSIT));
