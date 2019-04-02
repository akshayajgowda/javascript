(function(){
    "use strict";
    })();

class Person{
    constructor(){
        this.userName="kiran";
        this.lastName="pvs";
        this.firstName="kiran";
    }

    getFullName(){
        return this.firstName+this.lastName;
    }
}

var y = new Person();

console.log(y.getFullName());

class Company extends Person {
    constructor(){
        super();
    }
}


var com = new Company();
console.log(com);