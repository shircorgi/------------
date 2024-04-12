// 구조 분해 할당, 디스트럭팅(destructing)

let fruits = ["Apple", "Banana"];
let apple = fruits[0];
let banana = fruits[1];
console.log(apple, banana); //Apple Banana

let [apple2, banana2] = ["Apple", "Banana"];
console.log(apple2, banana2); //Apple Banana

let [a, b] = [];
console.log(a); //undefined
console.log(b); //undefined

/////

let seasons = ["spring", "summer", "fall", "winter"];
let spring = seasons[0];
let fall = seasons[2];
//index로 하면 헷갈리기 쉬움

let [spring2, , fall2] = ["spring", "summer", "fall", "winter"];
console.log(spring2, fall2); //spring fall

let [teacher, ...student] = [
  "서호준",
  "신수민",
  "조민성",
  "김용훈",
  "조찬증",
  "최유정",
];
console.log(teacher); //서호준
console.log(student); //[ '신수민', '조민성', '김용훈', '조찬증', '최유정' ]

let frontendClass = {
  className: "front(react) ban",
  gisu: 8,
};

let { className, gisu } = frontendClass;
console.log(className, gisu); //front(react) ban 8

let { className: cName, gisu: gisoo } = frontendClass;
console.log(cName, gisoo); //front(react) ban 8
