function multiply(num1,num2=1){
    return num1*num2;
}

console.log(multiply(2,3));
console.log("without passing num2 as argument" ,multiply(4));
console.log(" passing num2 as undefined in  argument" ,multiply(10,undefined));
