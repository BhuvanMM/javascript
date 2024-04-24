const lang=["c++","python","java","javascript"]
const values=lang.forEach((item)=>{
    return item;
})
console.log(values);


//filters in js
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=> num > 4)
//console.log(newNums);


//maps in js
/*const newNum=[]
myNums.forEach((nums)=>
{
    if(num>4)
    {
        newNum.push(num)
    }

}) */
//console.log(newNum);
//const x=myNums.map((num)=> {return num +10})
const x=myNums.map((num)=>{return num*10}).map((num)=>num+1)
console.log(x);