//There are 4 ways to create a new date object:

const time1 = new Date();
const time2 = new Date(2021, 7, 21, 23, 0,0,0); //JS counts months from 0 to 11
//January = 0; December = 11;
const time3 = new Date(1000);
// const time4 = new Date("August 21, 2020 10:49:00");
const time4 = new Date("2021-08-20")


console.log(time1);
console.log(time2);
console.log(time3);
console.log(time4);

//There are generrally 3 types of JavaScript date input formats:
// ISO Date "2023-03-25 (InternationalStantard)"
// Short DATE "03/25/2015"  mes,dia,year.
// Long DATE "Mar 25 2015" or "25 Mar 2015"

const timeISO = new Date("2022-06-22T18:30:00Z");
// console.log(timeISO);

console.log(timeISO.toISOString());
console.log(timeISO.toUTCString());


