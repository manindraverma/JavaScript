function showDetails([args1,args2]){
    console.log(args1);
    console.log(args2)
}

showDetails(["james","Anderson","francis"])

//in case of object
function showDetail({name,country}){
    console.log(name);
    console.log(country)
}

showDetail({name:"james",age:23,country:"france"})
