// Timer 관련 (비동기)
var count = 0;

let timer = setInterval(() => {
  console.log("Hi!");
  count++;
  if (count > 3) clearInterval(timer);
}, 1000);

// Timer (동기, js 외 타언어)

// while (true) {
//   setGreenLight();
//   sleep(30);
//   setRedLight();
//   sleep(60);
// }
