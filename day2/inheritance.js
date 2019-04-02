(function(){
    "use strict";
    const y =500;
    })();


    //<---------------spread operators---------------------->
    a={
        fname:"akshay",
        lname:"aj"
    }

    b={
        ...a,
        add:"ind"
    }

    console.log(b);

// class Person{
//     constructor(){
//         this.userName="kiran";
//         this.lastName="pvs";
//         this.firstName="kiran";
//     }

//     getFullName(){
//         return this.firstName+this.lastName;
//     }
// }

// var y = new Person();

// console.log(y.getFullName());

// class Company extends Person {
//     constructor(){
//         super();
// y=300;
        
//     }

//     a={

//     }
    
// }


// var com = new Company();
// console.log(com);


var a = [10,20];
var b=a;
a= [30,40];

console.log(a);
console.log(b);

var a={name:"ravi"}
var b=a;
a.name="akshay";
b.name="john";


console.log(a);
console.log(b);