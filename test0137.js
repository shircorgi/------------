// async await
// promise : ~~.then().then() uncomfortable

// General
function generalFunc() {
  console.log("일반함수네요");
}

// 1. async
async function asyncFunc() {
  console.log("async 함수네요");
}

function whatIsYourOrder() {
  let myOrder = "한솥도시락";
  return new Promise((resolve, reject) => resolve(myOrder));
}

function showYourOrder(mes) {
  return new Promise((resolve, reject) =>
    resolve(`promise로부터 ${mes}를 받았습니다.`)
  );
}
whatIsYourOrder().then(showYourOrder).then(console.log);

// 2. async
async function asyncWhatIsYourOrder() {
  let myOrder = "한솥도시락";
  return myOrder;
}

async function asyncWhatIsYourOrder(mes) {
  return `promise로부터 ${mes}를 받았습니다.`;
}

whatIsYourOrder().then(showYourOrder).then(console.log);

// 3. async + await
async function order() {
  const res = await asyncWhatIsYourOrder();
  const res2 = await asyncWhatIsYourOrder(res);
  console.log(res2);
}
order();
