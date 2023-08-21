/*
JSON    
javascript object notation

Json is a text based data format that is used to store data and tranfer it.

example:
{
    "fname":"hanzala",
    "age":34,
    "isAlive":True
}

*/

// convert an object to json

const obj={
    fname:"hanzala",
    age:23,
    number:3343838973,
    address:"myaddress"
}

let output=JSON.stringify(obj);
console.log(output);

//convert json to object

console.log(JSON.parse(output));
