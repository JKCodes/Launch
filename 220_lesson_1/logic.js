var apples = 3;
var bananas = 5;
if (apples == bananas) {
  console.log("Message");
}

bananas = "3";
if (apples == bananas) {
  console.log("Message");
}

if (apples === bananas) {
  console.log("Strict!");
}
else {
  if (apples == bananas) {
    console.log("Same value");
  }
  else {
    console.log("Strict!");
  }
}

apples = 3;
bananas = 3;
var are_equal = apples === bananas;

console.log(are_equal);

apples = 3;
bananas = undefined;
var either_or = apples || bananas;

console.log(either_or);

bananas = 1;
either_or = apples || bananas;

console.log(either_or);

either_or = bananas || apples;

console.log(either_or);

var last_name = "Riley";
var family_message = last_name === "Riley" ? "You're part of the family!" : "You're not family.";
console.log(family_message);