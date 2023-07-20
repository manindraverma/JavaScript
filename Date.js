let dateOne=new Date();
console.log(dateOne);
console.log('In milliseconds',dateOne.getTime());

console.log("Date :",dateOne.getDate());
console.log('Month',dateOne.getMonth());
console.log("Year",dateOne.getYear());

dateOne.setFullYear(2050,10, 7);
console.log("After setting date Info:",dateOne);

let today=new Date();
let dateDiff=(dateOne-today)/(1000*60*60*24);
console.log("dateDifference",Math.floor(dateDiff));
console.log("Today in String :",today.toLocaleString());
console.log("only date in string format :",today.toLocaleDateString());
