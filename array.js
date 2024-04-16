const myArr=[0,1,2,3,4,5]

//push values
myArr.push(6);
myArr.push(7);
console.log(myArr);

//pop values
myArr.pop();
console.log(myArr);

//shift values
myArr.shift();
console.log(myArr);

//unshift values
myArr.unshift();
console.log(myArr);

//slice =>original array does not gets modified 
const b=myArr.slice(1,3);
console.log(b); // prints values from index 1 to 2
console.log("original array:",myArr);

//splice =>original array gets modified 
const c=myArr.splice(1,3);
console.log(c); // prints values from index 1 to 3 
console.log("original array",myArr);

// merge two arrays 
const vegie=["carrot","tomato"]
const fruits=["apple","grapes"]
const newArr=vegie.concat(fruits);
console.log(newArr);

//merging using spread
const newArr1=[...vegie,...fruits];
console.log(newArr1);

//convert string or object into an array
console.log(Array.from("Bhuvan"));

//covert set of values to array
let n1=10
let n2=20
let n3=30
console.log(Array.of(n1,n2,n3));