// this =>used to refer to the current context

const user={
    username:"Bhuvan",
    age:19,
    welcomeMessage:function()
    {
        console.log(`${this.username} welcome to the website`);
    }
}
user.welcomeMessage();


// arrow functions syntax: ()=>{} 
const add= (n1,n2)=>
{
    return n1+n2;
}
console.log(add(1,2));

// single line arrow function: const add = (n1,n2) =>(n1+n2) . This is valid