console.log("This is week 5 script.js file");
console.log(`Hello, ${name}!`);

let myName = "Yang Luo";
console.log(`My name is ${myName}.`);

const myname1 = "iris";
console.log(`My name is ${myname1}.`);

const myStudentRecord = {
  name: "Iris",
  age: 3,
  city: "Melbourne",
};

console.log(`My student record is ${JSON.stringify(myStudentRecord.name)}.`);
console.log(`My student record is ${JSON.stringify(myStudentRecord.age)}.`);
console.log(`My student record is ${JSON.stringify(myStudentRecord.city)}.`);

//boolean
const isItEvening = true;
const isItRaining = false;

//back ticks
const myAddress = `RMIT 
LATROBEST
MELBOURNE IS ${myname1}'s address`;
console.log(`My address is ${myAddress}.`);

const student1 = "Iris";
const student2 = "Jack";
const student3 = "Mike";
const student4 = "Tom";

console.log("hello", student1);
console.log("hello", student2);
console.log("hello", student3);
console.log("hello", student4);

let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// console.log(`The first student is ${students[0]}.`);
// console.log(`The second student is ${students[1]}.`);
// console.log(`The third student is ${students[2]}.`);
// console.log(`The fourth student is ${students[3]}.`);
// console.log(`The fifth student is ${students[4]}.`);

let ids = [101, 102, 103, 104, 105];
// console.log(`The first student ID is ${ids[2]}.`);

console.log("array length is", students.length);
for (let i = 0; i < students.length; i++) {
  console.log("value of i is", i);
  console.log(`The student at index ${i} is ${students[i]}.`);
}

let score = 88;
if (score > 80) {
  console.log("You got HD.");
} else if (socre <= 80 && score >= 70) {
  console.log("You did not get D.");
} else if (score <= 70 && score >= 50) {
  console.log("You got P.");
} else {
  console.log("You got F.");
}

let marks = "88";
let marks2 = 88;
// console.log(marks === marks2);
