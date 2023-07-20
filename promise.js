let isMomHappy=true;

function momGift(){
    return new Promise(function(resolve,reject){
        if(isMomHappy){
            let Phone={
                name:'IPhone',
                cost:100000
            }

            resolve(Phone);
        }
        else{
            reject(new Error('Have you seen your score Card'));
        }

    })
}

let surprise=momGift();
surprise.then(function(successResponse){
    console.log(successResponse);

}).catch(function(errorResponse){
    console.log(errorResponse)
})
