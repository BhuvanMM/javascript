//backticks and string interpolation

let name="Bhuvan"
let num = 20
console.log(`Hello my name is ${name} and my age is ${num}`);
//to inject variables use ${}

//<----string is an object---->

const gameName = new String("BhuvanMM");
console.log(gameName[0]) // B will be printed 
// each alphabet is stored in key value pair like : => B:0 
                                                //  => h:1 so on
//string methods

const url="https//bhuvan.com/bhuvan%20mm    "
console.log(url.length);
console.log(url.substring(0,4))
console.log(url.replace('%20','-'));
console.log(url.trim()) //removes spaces
console.log(url.split('/'));
console.log(url.charAt(2));
