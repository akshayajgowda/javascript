(function(){
    "use strict";
    var cars;
    var list1;
    var list;
    list1=[];})();

    cars = [{id:1, name:'swift' ,price:'100', model:2018 },
            {id:2, name:'omni'  ,price:'200', model:2018},
            {id:3, name:'innova',price:'300', model:2018}];  

// <----------------------using for loop-------------->

            // for(i=0;i<cars.length;i++)
            // {
            //     if(cars[i].price<3000){
            //         list.push(cars[i]);
            //     }
            // }

// <----------------------using maps-------------->

            let y = cars.map((item,index)=>{
                    if(item.price>100){
                        let product = item;
                        product.position = index;
                        return product;
                    }
                })
                console.log(y);

            
// <----------------------using filters-------------->

            // let list = cars.filter((item,index)=>{
            //     return item.price>100;
            // });

            // let list = cars.filter((item,index)=>{
            //     item.position=index;
            //         return item.price>100;
            //     })

            // <----------------------using find-------------->
            
        //  let x = list.find();


        // <----------------------using arrow function-------------->
        // short hand opertaion
//         cars.filter(x=>x.price>100);
//         console.log(cars);
// })();

//let x = yourArray.filter((item,index)=>{return item.price>100;
//})


// let y = yourArray.map((item,index)=>{
//     if(item.price>100){
//         let product = item;
//         product.position = index;
//         return product;
//     }
