let globalVar='Global Variable';

function demo(){
    // localVar='local Variable';

    if(true){
        let globalVar="new Global Variable";
        console.log(globalVar);

    }
   // let globalVar="new Global Variable"
    let  localVar='local Variable';
    console.log(globalVar);
    console.log(localVar);
}

demo();
console.log(globalVar);
//console.log(localVar)
