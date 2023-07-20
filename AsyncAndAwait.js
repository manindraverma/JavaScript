function js1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('js1Output')
        },2000)
    })
}

function js2(js1O){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(js1O+"--js2Output")
        },3000)
    })
}

//the below function is handling promises object so it is prefix with async
async function totalOutput(){
    //below function will execute until the code is a resolved in js1 function
    const j1Output=await js1();

    //below function will also return a promise which needs to  be resolved
    const j2Output=await js2(j1Output);
    console.log('Final Output:'+ j2Output)
}

totalOutput();
