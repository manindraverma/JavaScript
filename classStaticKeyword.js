class Emp{
    constructor(empId,empName,empAge){
        this.id=empId;
        this.name=empName;
        this.age=empAge;
    }

    SwipeIn(){
        console.log('Employee id',this.id,'has swiped in at',new Date().toLocaleDateString());
    }

    static code(){
        console.log("Employee is Coding...!");
    }
}

let empObj=new Emp(100,"Max",28);
console.log("Id",empObj.id);
console.log("Name",empObj['name']);
console.log( empObj.SwipeIn());
//console.log("invoking static method using className",Emp.code());
//Emp.code();
