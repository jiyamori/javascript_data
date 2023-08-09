// //function expression

//  const singaSong = function (){
//         console.log("HappyBirthday");
//     }
    
    
//     singaSong();
//     // singaSong();
//     // singaSong();
//     // singaSong();
    
//      const  twoplusFour = function (){
//         return 2+4;
//     }
    
//     const returnedValue = twoplusFour();
//     console.log(returnedValue);
    
    
//     // function sumNumbers(num1, num2){
//     //     return num1+num2;
//     // }
    
//     // const returnedValue= sumNumbers(9,6);
//     // // console.log(returnedValue);
    

    //arrow function

    const singaSong =  () => {
        console.log("HappyBirthday");
    }
    

    singaSong();

    const isEven = number =>{
        return number % 2 === 0;
    }

    console.log(isEven(45));

    const firstChar = anyString => anyString[0];
    console.log (firstChar("jiya"));