// 프로토타입, 상속
function Book(title, price) {
  this.title = title;
  this.price = price;
}
// chrome console에서 Book.prototype 확인 / Object 상속

Book.prototype.buy = function () {
  console.log(`${this.title} 책을 ${this.price}원에 구매했어요.`);
};

const book1 = new Book("front tech", 30000);
book1.buy();

///////////////
function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(
    `${this.title} 책을 ${this.major}전공 할인을 받아서 ${
      this.price - 10000
    }원에 구매했어요.`
  );
};

Object.setPrototypeOf(TextBook.prototype, Book.prototype); //prototype을 연결 - 상속
const textbook1 = new TextBook("front tech", 30000, "IT");
textbook1.buy();
textbook1.buyTextBook();
