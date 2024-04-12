class Book {
  constructor(title, totalPages, nowPage = 1) {
    this.title = title;
    this.totalPages = totalPages;
    this.nowPage = nowPage;
  }

  read() {
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
  }
}
