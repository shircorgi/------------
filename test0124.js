// 기본 for문
let arr1 = ["a", "b", "c"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// forEach문 : 배열에 적합

arr1.forEach((char) => {
  console.log(char);
});

// for in문: 객체(key: value)
const student = {
  name: "조민성",
  age: "맏형",
  etc: "저는 그래도 사람들 괘롭히지는 않습니다",
};

for (key in student) {
  console.log(key + ":" + student[key]);
}

console.log(student[0]); //undefined

// for of문: iterable(generator, Map, Set, Array)에 적합
for (let char of arr1) {
  console.log(char);
}
