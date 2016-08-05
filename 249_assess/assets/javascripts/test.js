var dont_run = true;

if (dont_run) {
  throw new Error("test.js is prevented from running.");
}

//  #1  convert number into digit list

function digit_list(num) {
  var return_arr = [];
  (num += '').split("").forEach(function(elem) { return_arr.push(+elem); });
  return return_arr;
}


console.log("<----- Number 1 answers start here ----->");
console.log(digit_list(12345));  // Should equal [1, 2, 3, 4, 5]
console.log(digit_list(7));      // should equal [7]
console.log(digit_list(375290)); // should equal [3, 7, 5, 2, 9, 0]
console.log(digit_list(444));    // should equal [4, 4, 4]
console.log("<----- Number 1 answers end here ----->\n\n");

// #2 Count number of each occurrence in an array.

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function count_occurrences(vehicles) {
  var vehicle_list = {};
  vehicles.forEach(function(elem) {
    if(!(elem in vehicle_list)) {
      vehicle_list[elem] = 0;
    }
    vehicle_list[elem]++;
  });

  for(elem in vehicle_list) {
    console.log(elem + " => " + vehicle_list[elem]);
  }
}

console.log("<----- Number 2 answers start here ----->");
count_occurrences(vehicles);
console.log("<----- Number 2 answers end here ----->\n\n");


// #3 words in reverse order

function reverse_sentence(str) {
  return str.split(' ').reverse().join(' ');
}


console.log("<----- Number 3 answers start here ----->");
console.log(reverse_sentence(''));                         // ''
console.log(reverse_sentence('Hello World'));              // 'World Hello'
console.log(reverse_sentence('Reverse these words'));      // 'words these Reverse'
console.log("<----- Number 3 answers end here ----->\n\n");


/* #4 Write a method that takes one argument, a string containing one or more words, 
   and returns the given string with all five or more letter words reversed. 
   Each string will consist of only letters and spaces. Spaces should be included 
   only when more than one word is present. */

function reverse_words(word) {
  var word_array = word.split(' ');
  for(var i = 0; i < word_array.length; i++) {
    if (word_array[i].length > 4) { word_array[i] = word_array[i].split('').reverse().join(''); }
  }

  return word_array;
}

console.log("<----- Number 4 answers start here ----->");
console.log(reverse_words('Professional'));          // => lanoisseforP
console.log(reverse_words('Walk around the block')); // => Walk dnuora the kcolb
console.log(reverse_words('Launch School'));         // => hcnuaL loohcS
console.log("<----- Number 4 answers end here ----->\n\n");

// #5 Write a method that takes one argument, a positive integer, and returns a string of 
//    alternating 1s and 0s, always starting with 1. The length of the string should match the given integer.

function stringy(num) {
  var str = '';
  for (var i = num; num > 0; num -= 2) {
    str += '1';
    if (num !== 1) { str += 0; }
  }

  return str;
}

console.log("<----- Number 5 answers start here ----->");
console.log(stringy(6)); // '101010'
console.log(stringy(9)); // '101010101'
console.log(stringy(4)); // '1010'
console.log(stringy(7)); // '1010101'
console.log("<----- Number 5 answers end here ----->\n\n");


// #6 Write a method that takes one argument, an array containing integers, and returns the average of all numbers in the array. 
//    The array will never be empty and the numbers will always be positive integers.

function average(arr) {
  return parseInt(arr.reduce(function(a, b) {return a + b; }) / arr.length);
}

console.log("<----- Number 6 answers start here ----->");
console.log(average([1, 5, 87, 45, 8, 8]));    // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
console.log("<----- Number 6 answers end here ----->\n\n");

// #7 Write a method that takes one argument, a positive integer, and returns the sum of its digits.

function sum(num) {
  return (num + '').split('').map(function(elem){return parseInt(elem); }).reduce(function(a, b){return a + b; });
}

console.log("<----- Number 7 answers start here ----->");
console.log(sum(23));          // 5
console.log(sum(496));         // 19
console.log(sum(123456789));   // 45
console.log("<----- Number 7 answers end here ----->\n\n");

// #8 Write a method that takes two arguments, a positive integer and a boolean, and calculates the bonus for a given salary. 
//    If the boolean is true, the bonus should be half of the salary. If the boolean is false, the bonus should be 0.

function calculate_bonus(amt, flag) {
  return flag ? (amt / 2) : 0;
}

console.log("<----- Number 8 answers start here ----->");
console.log(calculate_bonus(2800, true));  //1400
console.log(calculate_bonus(1000, false)); //0
console.log(calculate_bonus(50000, true)); //25000
console.log("<----- Number 8 answers end here ----->\n\n");

// #9 Build a program that randomly generates and prints Teddy's age. 
//    To get the age, you should generate a random number between 20 and 200.

function randomAge(min, max) {
  return (min + Math.floor(Math.random() * (max - min + 1)));
}

console.log("<----- Number 9 answers start here ----->");
console.log("Teddy is " + randomAge(20, 200) + " years old!");
console.log("<----- Number 9 answers end here ----->\n\n");

// #10 Build a program that asks a user for the length and width of a room in meters
//     and then displays the area of the room in both square meters and square feet.

function calculateArea() {
  var area,
      length,
      width,
      msg;

  length = prompt("Enter the length of the room in meters");
  width = prompt("Enter the widthe of the room in meters");

  area = length * width; 
  msg = "The area of the room is " + area + " square meters (" + (area * 10.7639) + " square feet).";
  return msg;
}

console.log("<----- Number 10 answers start here ----->");
console.log(calculateArea());
console.log("<----- Number 10 answers end here ----->\n\n");

// #11 Write a program that will ask for user's name. The program will then greet the user. 
//     If the user writes "name!" then the computer yells back to the user.

function greet() {
  var name,
      return_str;
  name = prompt("What is your name?");

  if (name[name.length - 1] === '!') {
    name = name.substring(0, name.length - 1);
    return_str = "HELLO " + name.toUpperCase() + ". WHY ARE WE SCREAMING?";
  }
  else {
    return_str = "Hello " + name + ".";
  }
  return return_str;
}

console.log("<----- Number 11 answers start here ----->");
console.log(greet());
console.log("<----- Number 11 answers end here ----->\n\n");

// #12 Write a program that asks the user to enter an integer greater than 0, 
//     then asks if the user wants to determine the sum or product of all numbers between 1 and the entered integer.

function compute() {
  var integer,
      choice,
      return_val = 0;

  integer = prompt("Enter an integer great than 0.  Invalid entries will be defaulted to an integer of 1");
  choice = prompt("Enter 's' to compute the sum, 'p' to compute the product. Invalid entries will cause the final result to be -1");

  integer = +integer ? integer : 1;

  if (choice === 's') { 
    for (var i = 1; i <= integer; i++) {
      return_val += i;
    }
  }
  else if (choice === 'p') {
    return_val = 1;
    for (var i = 1; i <= integer; i++) {
      return_val *= i;
    }
  }
  else {
    return_val = -1;
  }
  return return_val;
}

console.log("<----- Number 12 answers start here ----->");
console.log(compute());
console.log("<----- Number 12 answers end here ----->\n\n");

// #13 Write a program that solicits 6 numbers from the user, then prints a message that describes whether or not the 6th number appears amongs the first 5 numbers.
//     then prints a message that describes whether or not the 6th number appears amongs the first 5 numbers.

function search101() {
  var arr = [],
      search,
      msg;
  for (var i = 1; i < 7; i++) {
    arr.push(prompt("Enter number #" + i));
  }
  search = arr.pop();
  if (arr.includes(search)) { 
    msg = "The number " + search + " appears in [" + arr.join(", ") + "]."; 
  }
  else {
    msg = "The number " + search + " does not appear in [" + arr.join(", ") + "]."; 
  }

  return msg;
}

console.log("<----- Number 13 answers start here ----->");
console.log(search101());
console.log("<----- Number 13 answers end here ----->\n\n");


// #14 Exclusive OR

function xor(bool1, bool2) {
  if (bool1 && !bool2 || (!bool1 && bool2)) { return true; }
  return false;
}

console.log("<----- Number 14 answers start here ----->");
console.log(xor(true, true));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(false, false));
console.log("<----- Number 14 answers end here ----->\n\n");

// #15 palindrome numbers

function palindromic_number(num) {
  return (num+"").split("").reverse().join("") === (num+"");
}

console.log("<----- Number 15 answers start here ----->");
console.log(palindromic_number(34543));  // true
console.log(palindromic_number(123210)); // false
console.log(palindromic_number(22));     // true
console.log(palindromic_number(5));      // true
console.log("<----- Number 15 answers end here ----->\n\n");