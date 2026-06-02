let student = [
  {
    name: "sanvi",
    age: 21,
    marks: 98,
  },
  {
    name: "ruchi",
    age: 20,
    marks: 78,
  },
  {
    name: "khushi",
    age: 19,
    marks: 77,
  },
];
console.log(student.length);
for (let i = 0; i < student.length; i++) {
  if (student[i].marks > 80) {
    console.log("distiction:", student[i].name, student[i].marks);
  }
  console.log(student[i]);
}
let transactions = [
  { upi: "a", number: 123, status: "succsses" },
  { upi: "b", number: 124, status: "Failure" },
  { upi: "c", number: 125, status: "Failure" },
  { upi: "d", number: 126, status: "succsses" },
];
for (let i = 0; i < transactions.length; i++) {
  //let newArr = [];
  if (transactions[i].status == "Failure") {
    // newArr.push(transactions[i]);
    console.log(transactions[i]);
  }
}
//console.log(newArr);


