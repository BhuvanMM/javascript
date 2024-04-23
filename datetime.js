//date 
let myDate=new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(typeof myDate); //object

//month and days count starts from 0
const date=new Date(2024,2,23)
console.log(date.toDateString());