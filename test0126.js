// 객체 js
let book = {
  title: "front tech",
  pages: 300,
  nowPage: 1,
  read: function () {
    if (this.nowPage >= this.totalPages) console.log("Read Complete");
    else {
      console.log(
        `${this.title}를 읽습니다. 지금 ${this.nowPage}를 읽고 있습니다.`
      );
    }
    console.log(
      `${this.title}을 읽습니다. 지금 ${this.nowPage}를 읽고 있습니다.`
    );
    this.nowPage++;
  },
};

book.read();
book.read();
book.read();
book.read();
book.read();

// copy
let number1 = 100;
let number2 = number1;
console.log(number2);

number2 = 200;
console.log(number2); //200

// object copy (참조ref 변수)
let car1 = {
  name: "Avante",
  color: "blue",
  engineSize: 1.6,
};

let car2 = car1;
console.log(car2); //blue

(car2.color = "red"), console.log(car1); //red
console.log(car2); //red

// 배열 복사
const arr1 = [10, 20, 30];
const arr2 = arr1.reverse();
console.log("arr1: ", arr1); // [30, 20, 10]
console.log("arr2: ", arr2); // [30, 20, 10]

const array1 = [10, 20, 30];
const array2 = [...array1].reverse();
console.log("arr1: ", array1); // [10, 20, 30]
console.log("arr2: ", array2); // [30, 20, 10]

let sedan1 = { name: "Avante", color: "blue", engineSize: 1.6 };
let sedan2 = { ...sedan1 };
sedan2.color = "red";
console.log("sedan1: ", sedan1);
console.log("sedan2: ", sedan2);
// ... 의 약점: 더 깊은 레벨은 안됨 / 재귀로 해결, Lodash 라이브러리
