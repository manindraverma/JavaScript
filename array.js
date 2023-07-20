let phone=[6300,"one plus",1001]

//length of array
console.log("length of phone array: "+phone.length)

//iterate over array
for(let i=0;i<phone.length;i++){
    console.log("Index :",i, "Array Element : ",phone[i])
}
//insert element into array
phone[3]="one plus 2T";
console.log("Adding element at index 3",phone)

//push()-insert element into array at the last
phone.push("k750i")
console.log("Adding element using push() method inside array :",phone);

//pop()-remove element of an  array from the last

phone.pop();
console.log("Removing element using pop() method from phone array",phone)

//forEach
phone.forEach((element)=>{console.log("Array elements :",element)})

//map()-used for creating a mapped array ,an array 
//created after applying some transformation to the existing array
let mappedArray=phone.map((phone)=>{
    if(typeof phone==='string'){
        return phone.toUpperCase();
    }
    else{
        return phone;
    }
})
//note:size of mapped array ===size of initial array i.e phone array
console.log("mapped Array",mappedArray)

//filter()=filter array element based on some condition
//the function passed as parameter inside filter function will be invoked for each iteration and the element under the current iteration will be passed as
//  parameter to the inside function  and this function passed as parameter should always return boolean value
let filteredArray=phone.filter((phone)=>{return typeof phone==='string'})
console.log("filtered Array ",filteredArray)

//find()-used to find a particular function inside the phone array and element under the current iteration will be passed as parameter to the inside function
//the function passed as parameter should always return boolean value and 
//based on that value the find( ) function return us corresponding element back to the foundElement variable
let foundElement=phone.find((phone)=>{return phone==="one plus 2T"})

console.log("foundElement : ", foundElement)
