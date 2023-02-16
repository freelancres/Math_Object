//Ex1: Is the Average of All Elements a Whole Number? -- level : easy - meduim
let result;
function isAvgWhole(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return Number.isInteger(sum / arr.length);
}

result = isAvgWhole([1, 3]);
//console.log(result);
result = isAvgWhole([1, 2, 3, 4]);
//console.log(result);

/**
 * isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false
 */


// Ex2: Convenience Store -- level : easy

function changeEnough(arr, price) {
    // let sum = 0;
    // for (let index = 0; index < arr.length; index++) {
    //     if (index == 0) {
    //         sum += arr[index] * 0.25;
    //     } else if (index == 1) {
    //         sum += arr[index] * 0.10;
            
    //     } else if (index == 2) {
    //         sum += arr[index] * 0.05;
            
    //     } else {
    //         sum += arr[index] * 0.01;
    //     }
    // }

    let sum = arr[0] * 0.25 +
        arr[1] * 0.10 +
        arr[2] * 0.05 +
        arr[3] * 0.01;
    
    return sum >= price;

}
result = changeEnough([0, 0, 20, 5], 0.75);
// console.log(result);
result = changeEnough([30, 40, 20, 5], 12.55);
// console.log(result);
result = changeEnough([2, 100, 0, 0], 14.11);
// console.log(result);
/**
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
 */


// Ex3: Square Every Digit: --- level: meduim  
function squareDigits(num) {
    num = String(num);
    console.log(num);
    num = num.split('');
    console.log(num);
    let x = [];
    let sqrDigit;
    for (i = 0; i < num.length; i++){
        sqrDigit = Math.pow(num[i], 2);
        x.push(sqrDigit);
    }
    console.log(x);
    let y = x.join('');
    return y;
}

result = squareDigits(9119);
console.log(result);

/**
 squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
 */