// //spread operator

// const array1=[1,2,3];
// const array2=[4,5,6];

// const newArray= [...array1, ...array2];
// console.log(newArray);

//spread operator in object

const obj1 = {
    key1:"value1",
    key2:"value2",
};

const obj2 = {
    key1: "value55",// if to key1 is used then the object overwrite the new key 1
    key3:"value3",
    key4:"value4",
};

// const newObject={...obj1,...obj2};
const newObject={...obj1,...obj2, key45:"value45"};
console.log(newObject);