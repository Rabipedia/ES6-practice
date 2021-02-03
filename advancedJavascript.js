// Truth and falsy values
// In condition every number is true except 0, also every string is true except empty string. If we don't define anything by default it is falsy. If the variable is null then it is false.
// Falsy: 0, "", undefined, null, NaN, false.
// Truthy: '0', ' ', [], {}, 'false'.

// Null vs Undefined
// Undefined

// 1)
let name;
console.log(name);
// 2)
function add(num1, num2) {
    // if we don't return the value 
    console.log(num1 + num2);
    //  3) return
    // also in case of if we have written return but havn't wirte anything else it's also undefined
}
const result = add(12,13);
console.log(result);
// 4)
function add1(num3, num4) {
    console.log(num3, num4);
}
const result2 = add1(14);
console.log(add1);

//In JavaScript, undefined is a type, whereas null an object.It means a variable declared, but no value has been assigned a value. Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

var demo = null;
alert(demo); //shows null
alert(typeof demo); //shows object

// double equal(==) vs triple equal(===).
// double equal take the value. triple equal take the type. it is better to use triple equal than double equal.


// Map, filter, find, smart way to run for loop
// map takes three parameter... element, index and array. 
// Map work with every element in an array. If we want to do anything with the elements we can use map. Map and filter will give us an array, on the other hand find will give us an element.
const numbers = [3, 4, 5, 6]
// ES5
// const square = [];
// for(let i = 0; i< numbers.length; i++) {
//    const element = numbers[i];
//    const result = element * element;
//    square.push(result);
// }

// ES6:
//function square (element) {
//    return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element) {
//    return element * element;
// })

const result3 = numbers.map(x => x * x);

// filter

const bigger = numbers.filter(x => x > 5);

// find
const isThere = numbers.find(x => x > 5);