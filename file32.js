//hoisting

//function inside function
//lexical scope

function myApp(){
    const myVar = "value1";
    function myFunct(){
        const myVar = "value34";
        console.log("inside myfunc", myVar);
    }
    console.log(myVar);
    myFunct();

}
myApp();