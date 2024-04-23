//demo 
console.log("1"+2+2); //prints 122
console.log(1+2+"2"); //prints 32 

//if string apppears first concatenate everything
//if number appears first perform operation and then concatenate

//comparisions in js
console.log(null > 0); //false => > or < converts null to zero
console.log(null == 0); //false => == works differently which actually compares the values
console.log(null >= 0); //true => because of conversion gives true

console.log(undefined > 0); //false  => no conversion takes place and hence everything is false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === =>compares data along with its data-type 
//=== => also called as strict comparison
console.log("2" === 2); //false because data-types are different