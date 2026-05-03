const user = {
  name: "Valeria",
  age: 14,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}


function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps(user));


function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;
  for (const name of Object.keys(employees)) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }
  return bestEmployee;
}

const employeesTasks = {
  Sam: 20,
  Dean: 24,
  Anna: 28,
};

console.log(findBestEmployee(employeesTasks));


function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

const salaries = {
  Sam: 10000,
  Dean: 15000,
  Anna: 20000,
};

console.log(countTotalSalary(salaries));

function getAllPropValues(arr, prop) {
  const result = [];
  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }
  return result;
}

const usersArray = [
  user,
  { name: "Sam", age: 30 },
  { name: "Dean", age: 22 },
];

console.log(getAllPropValues(usersArray, "name"));

function calculateTotalPrice(allProducts, productName) {
  let total = 0;
  for (const product of allProducts) {
    if (product.name === productName) {
      total += product.price * product.quantity;
    }
  }
  return total;
}

const products = [
  { name: "apple", price: 50, quantity: 3 },
  { name: "banana", price: 40, quantity: 5 },
  { name: "pineapple", price: 80, quantity: 2 }
];

console.log(calculateTotalPrice(products, "apple"));