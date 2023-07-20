function greet(choice){
    choice();
}

greet(function(){console.log("Hello World!")})

//above function using arrow function is given below
greet(()=>{console.log('Hello Home!')})

// function greet(()=>{
// console.log('Hello World!');
// })
//1st way to write arrow Function
let calculateTripCost=(ticketPrice,noOfPerson)=>{
    totalCost=ticketPrice*noOfPerson;
    return totalCost;
}


console.log(calculateTripCost(100,5));
//2nd way to write arrow Function
let trips=()=>console.log("lets go to trip!");
trips();
//3rd way to write Arrow function
let trip=place=>console.log("lets go to "+place);
trip("goa!");

//4th way to write Arrow function
let triping=_=>console.log("lets go to "+_);
triping("Manali!");


Happy=(name=>{console.log("Happy Morning!"+name)});

Happy("mani");


const myFunction = () => console.log("Hello ") || "World!";
let returnValue = myFunction();
console.log(returnValue);

 
