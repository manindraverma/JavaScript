function greet(choice){
    let message=choice();
    console.log(message);
}

let message=function(){console.log("Hello World!")}

greet(message);
