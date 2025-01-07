console.log(
  "There is no exercise better for the heart than reaching down and lifting people up."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(typeof +"10" == typeof 10);

let stringNumber = "9.8";

let convertedNum = parseFloat(stringNumber);

console.log(Math.ceil(convertedNum));

const toCheck = "on";

console.log("python".includes(toCheck));

console.log("jargon".includes(toCheck));

const sentence = "I hope this course is not full of jargon";

const word = "jargon";

console.log(sentence.includes(word), "check");

let randomNum = Math.random(); //Generate random no b/w 0to1
console.log(Math.floor(randomNum * 101)); //Generate random no b/w 0 to 100

console.log(Math.floor(randomNum * 51 + 50));

/*
Math.random(): Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
randomNum * 51: This scales the random value to a range of 0 to 51 (since 51 = 100 - 50 + 1).
randomNum * 51 + 50: Adding 50 shifts the range from [0, 51) to [50, 101), which gives numbers from 50 up to but not including 101.
Math.floor(): This rounds down the number to the nearest integer, ensuring the result is between 50 and 100 inclusively.
*/

console.log(Math.floor(randomNum * 256));

let givenString = "JavaScript";

const randomChar = console.log(
  givenString[Math.floor(randomNum * givenString.length)]
);

let givenStr =
  "You cannot end a sentence with because because because is a conjunction";

console.log(givenStr.indexOf("b"));
console.log(givenStr.lastIndexOf("e"));

console.log(givenStr.substr(31, 23));
console.log(givenStr.slice(31, 54));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
