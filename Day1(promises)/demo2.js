function person() {

    console.log(this.username);}
    
    var userDetails = {
    username:"akshay",
    password:"1234"};
    
    person.call(userDetails);


    

( function(){
    
    console.log('hello');
    console.log('hello2');
    console.log('hello3');})();

// second

    function f() {
        console.log("i am first");
        s();
    }
    
    function s(){
        console.log("i am second");
    }
    f();

    // third

    setTimeout(function(){
        console.log('five');
    },5000);
    
    setTimeout(function(){
        console.log('three');
    },3000);
    
    setTimeout(function(){
        console.log('four');
    },4000);

    //fourth

    var promise =  new Promise(function(resolve,reject){
        if(true){
            resolve("I am Resolved");
        }else{
            reject("it's over");
        }
    })

    promise.then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    });