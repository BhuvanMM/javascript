//basics of functions
function add(num1,num2)
{
    return num1+num2;
}
console.log(add(2,3));

//string interpolation
function login(username)
{
    if(username==undefined){console.log("please enter a name");return;}
    return `${username} just logged in`;
}
console.log(login());

//variable arguments
function calculateCartPrice(...args) // ... => rest operator 
{
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}
console.log(calculateCartPrice(10,20,30));

//objects as parameter
const user =
{
    username:"Bhuvan",
    price:1000
}

function handleobjects(anyobject)
{
    console.log(`Name of customer is ${anyobject.username} and price of goods is ${anyobject.price}`);
}
handleobjects(user);