function save(){
console.log('save');

let userString=document.getElementById('item-list').value;
sessionStorage.setItem("data",userString)
}
function remove(){
console.log('remove');
sessionStorage.removeItem('data')

}
function display(){
console.log('display');

let dataString=sessionStorage.getItem('data');
console.log(dataString);
document.getElementById('data').innerHTML=`<li>${dataString}</li>`;
}
