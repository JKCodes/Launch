var friends = ["Bob", "Josie", "Sam"];
var enemies = ["Bob", "Josie", "Sam"];
console.log(friends == enemies);
friends_clone = friends;
console.log(friends_clone == friends);

function lastInArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastInArray([1, 2, 3, 4]);

var names = ["Steve", "Martha", "Pat"];

function rollCall(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

rollCall(names);

var numbers = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  var reversed_array = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed_array.push(numbers[i]);
  }
  return reversed_array;
}

console.log(reverseArray(numbers));

function firstIndex(val, arr) {
  var position = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      position = i;
      break;
    }
  }
  return position;
}

console.log(firstIndex(2, [1, 2, 3]));
console.log(firstIndex(9, [1, 2, 3]));

function arrayToString(arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

console.log(arrayToString([1, 2, 3]));