// Question:
// Write a function getStudentInfo(name, key) that:
// Returns the value of key for the student with the given name.
// Returns "No such information" if the key doesn’t exist.
// Returns "Student not found" if the name doesn’t exist.

const students = [
  { name: "Alice", grade: "A", age: 20 },
  { name: "Bob", grade: "B", age: 22 },
  { name: "Charlie", grade: "C", age: 21 },
];

function getStudentInfo(name, key) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name == name) {
      if (students[i].hasOwnProperty(key)) {
        return students[i][key];
      } else {
        ("no such info found");
      }
    } else {
      ("no student found");
    }
  }
}

console.log(getStudentInfo("Bob", "age"));
