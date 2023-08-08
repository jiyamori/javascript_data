// array destruction
const myArray = ["value1", "value2", "value3","value4"];
// let var1= myArray[0];// instead of this we have a short cut methode destruction
// let var2 = myArray[1];
// console.log("value of var1",var1);
// console.log("value of var2", var2);

// let [var1,var2]= myArray;
let [var1,var2 ,...myNewArray]= myArray;
// let myNewArray = myArray.slice(2);
// let[var1, ,var2]= myArray;//if we want to skip value 2 then
console.log("value of var1",var1);
console.log("value of var2", var2);
console.log(myNewArray);
