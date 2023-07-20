//meta character are the one which has some special meaning in regex
//Quantifiers will indicate the frequency of character that can be matched using Regex
//e.g of Quantifier-->('+'-indicates one or more),('*'-zero or more)('?'- may or maynot )



let regEX1=/^[a-z0-9_]+@[a-z]+\.(com|in)$/;
console.log(regEX1.exec('username@gmail.com'));//if pattern matches exec() method return an array ,if not it  return null

//test() method always give us boolean output
console.log(regEX1.test('manindra100@gmail@.com'));

let str ='HelloWorld';
console.log(str.search(/ello/));
//search() method return index which matches if does not match it will return -1

//match()  method return array with index when matches  but if it does not match it will return null
console.log(str.match(/oWo/));

//replace ()  method find the match b/w str and regex and replace 
//the match string with the new string and it will replace only the first occurence of the matched regex pattern
//so if we want to replace all the occurence we have to specify the flag g along the end of regex pattern as below

console.log(str.replace(/l/g,'o'))
