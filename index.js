console.log("this is the index file");
console.log(document);
console.log(document.getElementsByTagName('h1')[0])
const h2Element=(document.getElementById('h2-tag'));
console.log(h2Element.innerHTML);
console.log(h2Element.innerText);
h2Element.innerHTML+='Added by Js';
function clickHandler(){
    alert("Hey welcom to DOM tutorial")
}

function buttonClick(e){
    console.log("button clicked");
    console.log('this is event oject of button',e)
}

function divClick(e){
    console.log("div clicked");
    console.log(
    'this is event object of div ',e
    )
}

function inputEntered(e){
    console.log(e.target);
   // e.target gives us input tag as a whole
    console.log(e.target.value);
    document.getElementById('data').innerHTML=e.target.value;
}
function nameInput(e){
    if(e.target.value.length<5){
        document.getElementById('errMessage').innerHTML="Please more than 5 character"

    }
    else{
        document.getElementById('errMessage').innerHTML= "";
    }
}
function submitThis(e){
    e.preventDefault();
    console.log("About to submit");
}
