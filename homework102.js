var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
var re = /\b[^Aa\s]{6,}/g;
console.log("Зразок:"+ str);
console.log(str.search(re));
var res = str.match(re);
console.log(res);