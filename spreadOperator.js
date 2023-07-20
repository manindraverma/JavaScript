function sendCars(...allCarIds){
allCarIds.forEach(id=>console.log('Cars are:',id))
}
sendCars(100,200,300);
//spread Operator-it allows us to destructure the iterables and to pass an idefinite no of parameter to the function
//we will see how spread is use to unpack ,destructure oject,array or any other iterables and what is rest parameter

//rest parameter-collects a bunch of items and put them in an array or an object and denoted by ...AnyName
//spread operator allows an iterable to spread or expand individually


function sendBikes(bike1,bike2,bike3){
    console.log("bike ids are",bike1,bike2,bike3)
}

let allbikeIds=[11,22,33];
sendBikes(...allbikeIds);

//deconstruction means taking out indivisual items from an object or array and storing them in the variables
let carIds=[1,2,3];
let [car1,car2,car3]=carIds;
console.log("deconstruct array element ",car1,car2,car3);

let car={id:1,model:2012}
let {id,model}=car;
console.log("deconstructing object element",id,model);

//create a copy of existing object into a new object
let newcar=car;
console.log("created copy of an existing object",newcar)

//another way to add new property along with existing object
let newCar={...car,color:"red"}
console.log("new object along existing object and some new properties ",newCar);
