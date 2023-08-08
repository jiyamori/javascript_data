// //for of loop;\
// const fruits= ["apple","mango","grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }


//for in loop

const fruits=["apple","mango","banana"];
const fruits2=[];
for(let index in fruits){
    fruits2.push(fruits[index]. toUpperCase());
}
console.log(fruits2)