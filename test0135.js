// 비동기 처리 방식
// 동기 처리(주류) vs  비동기 처리
// 멀티 스레드(Java) vs 싱글 스레드(JS)
// 멀티 스레드(Java) - 소회의실 5개 (1명의 선생님이 독점돼 있다고 간주)
// 싱글 스레드(JS) - 전체회의실 1개 (선생님은 1명이고 학생이 여럿 / 양보라는 개념 존재)
// 양보: 급한 일 먼저

// function dispA() {
//   console.log("A");
// }
// function dispB() {
//   console.log("B");
// }

// function dispB_delay2() {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// }
// function dispC() {
//   console.log("C");
// }

// function proc1() {
//   dispA();
//   dispB();
//   dispC();
// }
// proc1();

// function proc2() {
//   dispA();
//   dispB_delay2();
//   dispC();
// }

// proc2();

// function dispB_callback(callback) {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// }
// function proc3() {
//   dispA();
//   dispB_callback(dispC);
// }
// console.log("proc3()");
// proc3();

// 햄버거 주문 과정
// 1. 고객이 주문을 요청
// 2. 결제
// 3. 조리 측에 주문 전달
// 4. 햄버거 조리
// 5. 햄버거 포장
// 6. 고객에게 전달
// 7. 고객이 내용물을 확인하고 시식
function order() {
  setTimeout(() => {
    console.log("1. 고객이 주문을 요청 1000ms");
  }, 1000);
}
function pay() {
  setTimeout(() => {
    console.log("2. 고객이 결제 1000ms");
  }, 500);
}
function orderTx() {
  setTimeout(() => {
    console.log("3. 조리 측에 주문 전달 1000ms");
  }, 300);
}
function cook() {
  setTimeout(() => {
    console.log("4. 햄버거 조리 1000ms");
  }, 3000);
}
function pack() {
  setTimeout(() => {
    console.log("5. 햄버거 포장 1000ms");
  }, 100);
}
function out() {
  setTimeout(() => {
    console.log("6. 고객에게 전달 1000ms");
  }, 500);
}
function check() {
  setTimeout(() => {
    console.log("7. 고객이 내용물을 확인하고 시식 1000ms");
  }, 100);
}
function getBurger() {
  order();
  pay();
  orderTx();
  cook();
  pack();
  out();
  check();
}
//getBurger();

function getBurgerByCallback() {
  setTimeout(() => {
    console.log("1. 고객이 주문을 요청 1000ms");
    setTimeout(() => {
      console.log("2. 고객이 결제 1000ms");
      setTimeout(() => {
        console.log("3. 조리 측에 주문 전달 1000m");
        setTimeout(() => {
          console.log("4. 햄버거 조리 1000ms");
          setTimeout(() => {
            console.log("5. 햄버거 포장 1000ms");
            setTimeout(() => {
              console.log("6. 고객에게 전달 1000ms");
              setTimeout(() => {
                console.log("7. 고객이 내용물을 확인하고 시식 1000ms");
              }, 1000);
            }, 1000);
          }, 10000);
        }, 1000);
      }, 3000);
    }, 500);
  }, 1000);
}
getBurgerByCallback();
