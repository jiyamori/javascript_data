//rest parametes

// function myFunct (a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunct(1,2,3,4,5,6,7,8,9,0);

// function addAll(...numbers){
//     let total = 0;
//     for (let number of numbers){
//     total = total+number;
//     }
//     return total;
// }
//  const ans = addAll(1,34,5,8,5);
//  console.log(ans); 


//param drstructuring

//callback function

function myFunc(callback){
    callback("jiya");
    
}

// function myFunc2(){
//     console.log('inside the func2');
// }

function myFunc2(name){
    console.log('inside the func2');
    console.log(`my name is ${name}`);
}
myFunc(myFunc2);