const userMail="bhuvan@gmail.com"
if(userMail)
{
    console.log("valid user");
}
else
{
    console.log("Invalid user");
}

//falsy values => false, 0 , -0, BigInt 0n,null,undefined,NaN ,""
//truly values => 'false','0' ," ",funtion(){},[],{}

//nullish coalescing operator(??)
let val;
val=null ?? 10; // 10 gets printed
console.log(val);
val =undefined ?? 15 // 15 gets printed
console.log(val);

val = null ?? 10 ?? 15; // first valid value/number gets printed
console.log(val);



