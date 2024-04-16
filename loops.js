//for of loop
const arr=[1,2,3,4,5];
for(const x of arr)
{
    console.log(x);
}

//maps
const mp=new Map();
mp.set('IN','India');
mp.set('US','United states');

for(const [key,value] of mp)
{
    console.log(key,value);
}

//objects cannot be iterated using for of loop
const games=
{
    game1:"GTA",
    game2:"PUBG"
}
//for(const [key,values] of games)
//{
    //console.log(key,values); //This is invalid
//}

// for in loop 
for(const x in games)
{
    console.log(x); //prints object keys
}
//accesing values
for(const x in games)
{
    console.log(games[x]); //prints object keys
}
//for in cannot be used on maps

//for each loop
const arr1=["js","c++","c","python"];

arr1.forEach(function (item){
    console.log(item);
})

//important opertions

const db=[
    {
        language:"javascript",
        short:"js"
    },
    {
        language:"C++",
        short:"cpp"
    },
    {
        language:"Python",
        short:"py"
    }
];
db.forEach((item)=>{
    console.log(item.short);
})

const newNum=[1,2,3,4,5,6];
const val=newNum.filter((item)=> item>4)
console.log(val);