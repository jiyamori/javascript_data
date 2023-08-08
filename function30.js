// //function

// function singaSong(){
//     console.log("HappyBirthday");
// }


// singaSong();
// singaSong();
// singaSong();
// singaSong();

// function twoplusFour(){
//     return 2+4;
// }

// const returnedValue = twoplusFour();
// console.log(returnedValue);


// function sumNumbers(num1, num2){
//     return num1+num2;
// }

// const returnedValue= sumNumbers(9,6);
// // console.log(returnedValue);

// function find(number){
//     // if (number % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;// no neec to write else direct return
//     // }
//     return number % 2 ===0;
// }
// console.log(find(9));


//as a string inpit
//  function firstChar (anystring){
//     return anystring[0];
//  }

//  console.log(firstChar("fsrfknabc"));

function findtarget(array,target){
    for(i=0;  i<=array.length ; i++) {
    if (array[i]===target){
        return i;
    }
}
return -1;
}

const myArray= [1,3,6,4];
const ans = findtarget(myArray, 6);
console.log(ans);