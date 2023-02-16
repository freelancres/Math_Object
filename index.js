const num1 = 100;
const num2 = 50;
const arr = [-1, 5, 800, -10, 0];
let result = 0;

// Simple math 
result = num1 + num2;
result = num1 * num2;
result = num1 - num2;
result = num1 / num2;
result = num1 % num2;
result = num1 ** num2; // newly added to ES

//Math Object
// console.log(Math)

// MAth Constants :
result = Math.PI;
result = Math.E;

// Math methods:

//Function vs Method 
//function myFunc() { return 'hello' };
// let obj = {
//     x: 5,
//     myFunc: (){
//         return 'hello'
//     }
// }

// round: round to the nearest integer

result = Math.round(2.4) // 2

//ceil : round to the ceil of the integer
result = Math.ceil(5.0000001); // 6

//floor : round to the floor of the integer
result = Math.floor(2.999999999); // 2

// sqrt: square root 
result = Math.sqrt(64); // 8

//pow : power of
result = Math.pow(8, 3); // 512

//abs: absolute value of given number
result = Math.abs(-10) // 10

// sign : returns the sign of given value
result = Math.sign(-10) // -1

//min: returns the smaller value
result = Math.min( -10, 4, 1,-12, 800);//-12

// '...' : spread operation 
result = Math.min(...arr);

//max: returns the greater value
result = Math.max(...arr);

// random: returns random number fromm 0 to 1
result = Math.random();

// write a function to get a random integer
// between two given values

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

result = getRandomInt(10, 100);



// log result  in console
console.log(result);