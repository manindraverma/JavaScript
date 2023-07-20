//josn stands for javaScript object notation 
//a js progrram can easily convert json data into native js literal object using the built in json object
//json format is very much syntactically similar to js literal object syntax 
//json is simple and light weight format which is used for storing and transporting data across the web

//json has 2 methods parse and stringify
//stringfy converts object into string
//parse convert string into object

let car={
    id:13,
    type:"sedan"
}

//when we want to pass this object over the web ,we need to convert this into json string
// which is also known as js obejct notation string
//inorder to do conversion we have inbuilt object callled as json

console.log(JSON.stringify(car));//converts js literal object into corresponding json string

//parse-to convert json string back to js object we use parse() method of json object
let jsonCarString='{"id":1000,"model": 2008}'
console.log(JSON.parse(jsonCarString))
