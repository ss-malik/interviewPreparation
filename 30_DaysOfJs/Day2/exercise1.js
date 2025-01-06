const variable = "30 Days Of JavaScript";

console.log(variable);

console.log(variable.length);

console.log(variable.toUpperCase());

console.log(variable.toLowerCase());

console.log(variable.substring(0, 1));

console.log(variable.substring(3));

console.log(variable.includes("Script"));

console.log(variable.split());

console.log(variable.split(" "));

console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);

console.log(variable.replace("JavaScript", "Python"));

console.log(variable.charAt(15));

console.log(variable.charAt(11));

console.log(variable.charCodeAt(11));

console.log(variable.indexOf("a"));

console.log(variable.lastIndexOf("a"));

console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);

console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);

console.log("hii");
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);

console.log("   30 Days Of JavaScript   ".trim());

console.log(variable.startsWith("30"));

console.log(variable.endsWith("ipt"));

console.log(variable.match(/a/gi));

console.log("30 Days Of".concat(" JavaScript"));

console.log(variable.repeat(2));
