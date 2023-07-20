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
// js2().then(function(j2Response){
//     console.log(j2Response)
// });
js1().then(function(j1Response){
    //below line return a promise
    return js2(j1Response)
}).then(function(j2Response){
    console.log(j2Response)
})
