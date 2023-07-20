let firstObjectUsingLiteralNotation={};
console.log("Creating Object Using Literals Notation :",firstObjectUsingLiteralNotation);

let secondObjectUsingLiterals={id:177,name:'Jane',age:82};
console.log('dot Notation :',secondObjectUsingLiterals.id);
console.log('bracket Notation :',secondObjectUsingLiterals['name']);

secondObjectUsingLiterals.id=188;
console.log("New Id :",secondObjectUsingLiterals.id);

//create a obj
let name='John';
let age=42;

let empObj={
    empname: name,
    empage:age,
}

console.log("Emp Object",empObj);

let empObjEs6={
    name,
    age
}

console.log("newES6Style to create Obj :",empObjEs6);

console.log("values of Second Object :",Object.values(empObjEs6));
//the output will be always an array for above line


let Employee={id:666,name:'john',age:33};
for(let key in Employee){
    console.log(key , ":",Employee[key])
}

//after ES6 intro ,for iterating  object, we can convert Object into Array using either of one(Object.keys(),Object.values(),Object.entries())
console.log("Object iteration using Object.keys() ")
Object.keys(Employee).forEach((key)=>{
    console.log(key,":",Employee[key])
})
//object.values create an array which contain values of Each key
console.log("Object iteration using Object.values()")
Object.values(Employee).forEach((value)=>{
    console.log('values of emp object is',value)
})
//object.entries-this mehod creates an array of Arrays [[key,value],[key,values]]
console.log('Object iteration using Object.entries');
Object.entries(Employee).forEach((arr)=>{
    console.log(arr[0],"----",arr[1])
})

