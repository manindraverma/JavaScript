let mystring="    East India Company";
//in js ,string are array of character
console.log('first character of myString : ',mystring[0])
//indexOf()-used to find index of a character or string present inside 
//string variable
let index=mystring.indexOf('India')
console.log("index :" ,index)

//charAt()
let charat=mystring.charAt(6);
console.log("charater at given index : ",charat)
//split()-this will return an array of splitted based on given condition

let splitarr=mystring.split(' ')
//let splitarr=mystring.split(' ',2)
console.log("splitted array : ",splitarr)

//substr()-it is used to extract some character from the input string
let substr=mystring.substr(0,8);
console.log("substring of given string : ",substr)

//substring()-it is used to extract character by specifying starting and ending index
let substring=mystring.substring(3,9)
console.log("substring method for given stirng: ",substring)

//lowercase and uppercase
let lowercase=mystring.toLowerCase()
console.log("Lowercase string:",lowercase)

let uppercase=mystring.toUpperCase()
console.log("UpperCase string :" ,uppercase)

let newString=mystring.slice(4,9)
console.log("new Sting after slice :",newString)

let newstr=mystring.trimStart()
console.log("newstr using trim :", newstr)
