var now = new Date();
var now = new Date("2024-04-09");
var now = new Date("2024-04-09T09:42:00");

var date1 = new Date("2024-04-09");
time1 = date1.getTime();
console.log(time1);

var date2 = new Date("2024-04-09T10:05:00");
var date3 = new Date("2024-04-09T10:05:01");
time2 = date2.getTime();
time3 = date3.getTime();
console.log(time2);
console.log(time3);

console.log(1712620800000 / (1000 * 60 * 60 * 24 * 365));

var start = new Date("2024-03-20").getTime();
var now = new Date("2024-04-09").getTime();
var end = new Date("2024-08-06").getTime();

var timePassed = now - start;
var dayPassed = timePassed / (1000 * 60 * 60 * 24);
console.log(`우리의 과정은 ${dayPassed}일 만큼 지났어요`);

var timeLeft = end - now;
var dayLeft = timeLeft / (1000 * 60 * 60 * 24);
console.log(`우리의 과정은 ${dayLeft}일 만큼 지났어요`);
console.log(
  `우리의 과정은 ${(100 * dayPassed) / (dayPassed + dayLeft)}% 만큼 지났어요`
);
