// singleton object 
const tinderUser = new Object()
console.log(tinderUser);

//combining objects

const obj1= {1:"a" ,2:"b"}
const obj2= {3:"c" ,4:"d"}
//way-1
//const obj3=Object.assign({},obj1,obj2) // {} =>include for basic syntax ** also it copies all objects into 1
//console.log(obj3);
//way-2
const obj3={...obj1,...obj2} //using spread
//console.log(obj3);


//de-structuring of objects
const course=
{
    name:"javascript",
    price:999,
    instructor:"human"
}

const {instructor} =course //rather than using course.instructor everytime use this

console.log(instructor);



