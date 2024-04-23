let num="33"
let numCon = Number(num)
console.log(numCon)


let isLoggedIn=0; // 1 =>true and 0=>false
let x=Boolean(isLoggedIn);
console.log(x);
//1. "33" => 33
//2. "33abs"=> NaN
//3. true=>1 false=>0
//4. 1=>true 0=>false
//5. "" =>false "bhuvan"=>true

//demo for "" and "value"

let str="";
let a=Boolean(str);
console.log(a);//false

let str1="bhuvan"
let b=Boolean(str1);
console.log(b); //true