let str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let arr = str.match(/love/gi);

console.log(arr.length);

function checkCount(sentence, givenWord) {
  let arr = sentence.split(" ");
  let count = 0;
  for (let word of sentence) {
    if (word === givenWord) {
      count = count + 1;
    }
  }
  return count;
}

checkCount(
  "You cannot end a sentence with because because because is a conjunction",
  "because"
);

let incomeSentance =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let arrIncome = incomeSentance.split(" ");
let totalIncome = 0;
for (let income of arrIncome) {
  console.log(income);
  //   if (typeof income === "number") {
  //     console.log(income);
  //   }
}

totalIncome = 5000 * 12 + 10000 + 15000 * 12;
console.log(totalIncome, "it is in euro");
