if(true)
{
    const a=10;
    let b=20;
    var c=30;
}
//console.log(a); => cannot be accessed outside
//console.log(b); =>cannot be accessed outide
//console.log(c); =>can be accessed outside , which is not good

// <---------------IMPORTANT----------------->
// normal function 
console.log(add1(5)); //this is allowed for normal functions!!
function add1(num)
{
    return num+1;
}
//hoisting 
//console.log(add(5)); => this is not allowed for this type of functions,function call is always after declaration
const add=function(num)
{
    return num+1;
}
console.log(add(5));
