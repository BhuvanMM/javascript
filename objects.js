//declare a symbol and use it inside an object or act it like a key

const mySym =Symbol("key-1")

const JSuser =
{
    name:"Bhuvan",
    age:19,
    location:"Mysore",
    college:"NIE",
    isLoggedIn:false,
    lastLogginDays:["Monday","saturday"],
    //symbols used as key inside object
    [mySym]:"This is key 1"
}

//two ways of accessing objects

console.log(JSuser.name);
console.log(JSuser[mySym]); // accessing symbols
console.log(JSuser["lastLogginDays"]);

//freeze an object or cannot commit changes 
JSuser.age=20
//Object.freeze(JSuser) // no changes to the values inside objects can be done
//JSuser.age=20 // change in age doesnot happen as we have freezed the object

JSuser.greeting = function()
{
    console.log("Hello js user")
}
//console.log(JSuser.greeting) => returns only reference
//console.log(JSuser.greeting()) => returns the value or prints whatever is inside the fun

// accesing values defined inside the object
JSuser.greeting2 = function()
{
    console.log(`Hello Js user ${this.name}`); // this is called string interpolation
}
console.log(JSuser.greeting2())
