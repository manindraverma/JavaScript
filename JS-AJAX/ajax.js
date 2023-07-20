// we use ajax.js file to read the json data into html file
//firstly we want to get the data as javaScript object printed in the console,we can 
//create element and represent the data however we like
//our js code  can  contact the server and send or fetch the data so to perform this operation asynchrously we use the xmlHttpRequest api
//there are four step to do ajax as below-


function getData(){
    alert("about to get data");
    
//step 1:create xhr object
const xhr=new XMLHttpRequest();

//step 2: to create a url and open a connection to this url
//url-it is an address that we can use to access any resource over the internet

const url="http://127.0.0.1:5500/JS-AJAX/data.json";
xhr.open('GET',url);

//step 3: telling what to do when we get the response
//xhr has an onload attribut which need to be assigned a function
xhr.onload=()=>{
//we can assign a function value here
//onload tell us what to do on loading of the request when we get the response back
console.log("loaded with data");

//xhr object has an attribute called responseText where response would be return as textual string
//data from ajax object will be received as string
console.log(typeof xhr.responseText);

//if we want to do some javaScript operation on the responseText we have to convert it into json/actual object
let dataObj=JSON.parse(xhr.responseText);
console.log(dataObj);

//create dt tag...
//append with div of id="data"

for(let key in dataObj){

    let dl=document.createElement('dl');
    let dt=document.createElement('dt');
    dt.innerHTML=`${key}`;
    let dd=document.createElement('dd');
    dd.innerHTML=`${dataObj[key]}`;
    dl.appendChild(dt);
    dl.appendChild(dd);

    document.getElementById('data').appendChild(dl)
}

}
//step 4: sending the request 
//it can take any data if required but here we are not sending any data

xhr.send();


}
