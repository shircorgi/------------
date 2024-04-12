// 객체 js - 생성자 함수 정의 - new()
function Book(title, totalPages, nowPage = 1) {
  this.title = title;
  this.totalPages = totalPages;
  this.nowPage = nowPage;
  this.read = function () {
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
  };
}

let book1 = new Book("front tech", 3);
let book2 = new Book("back tech", 4, 2);
book1.read();
book2.read();
