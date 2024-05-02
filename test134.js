//JSON

//javascript 객체
const student = {
  name: "이현경",
  career: "publisher",
};

// JSON
// const studentJson = {
//   "name": "이현경",
//   "career": "publisher",
// };

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson.name); //undefined

const studentAgain = JSON.parse(studentJson);
console.log(studentAgain.name); //이현경
console.log(studentAgain); //{ name: '이현경', career: 'publisher' }
