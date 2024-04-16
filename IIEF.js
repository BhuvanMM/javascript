//Immediately invoked function Expression
(function fun1()
{
    console.log("DB is connected");
}) () ; // always end IIFE using semi-colon

( (name) => 
{
    console.log(`DB is connected ->2 ${name}`);
}) ('Bhuvan');
