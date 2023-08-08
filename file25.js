//dot and bracket
// const key = "email";
const person = {
    name: "jiya", 
    age:29,
    hobbies : ["music listening", "dancing"]

}

// person[key]= "morijiya@gmail.com";//when need to aad key no need to write in string
// console.log(person);

//how to iterate object

//forin loop //object.keys

// for(let key in person){
//     // console.log(person[key]);
//     // console.log(`${key}: ${person[key]}`); // if we want key value pair
// console.log(key,";", person[key]);
// }

 console.log(Object.keys(person));
 const val = Array.isArray(Object.keys(person));
 console.log(val);