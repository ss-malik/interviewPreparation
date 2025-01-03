console.log(typeof 50);
// Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.

/*
let word = 'JavaScript'
If we try to modify the string stored in variable word, JavaScript should raise an error. Any data type under a single quote, double quote, or backtick quote is a string data type.

word[0] = 'Y'

This expression does not change the string stored in the variable word. So, we can say that strings are not modifiable or in other words immutable. Primitive data types are compared by its values.
*/

let num1 = 3;
let num2 = 3;
console.log(num1 == num2);
console.log(num1 === num2);

let arr = [1, 2, 3];
arr[10] = 11;
console.log(arr);

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums[0] == numbers[0]);

console.log(Math.ceil(Math.random() * 10));
