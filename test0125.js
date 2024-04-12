// 프로그래밍 패러다임

// 선언형 프로그래밍
//결과를 묘사
//<img>
const numbers = [1, 2, 3, 4];
const evenNumber = number.filter((num) => num % 2 == 0);

// 명령형, 절차 지향 프로그래밍
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 == 0) evenNumbers.push(num);
}

// 객체 지향 프로그래밍
// Java 개발자 모집(객체 지향 프로그래머 모집, 스프링 부트 개발자 모집)
// Java fundamental language
// 조직화, 객체 = 프로퍼티(변수 값) + 메소드(함수)
// 주변의 모습을 묘사
