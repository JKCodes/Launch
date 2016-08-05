var dont_run = true;

if (dont_run) {
  throw new Error("test2.js is prevented from running.");
}

//  #16  Running Totals

function running_total(arr) {
  var sum = 0,
      new_arr = [];

  new_arr = arr.map(function(elem) {
    sum += elem;
    return sum;
  });
  return new_arr;
}


console.log("<----- Number 16 answers start here ----->");
console.log(running_total([2, 5, 13]));          // [2, 7, 20]
console.log(running_total([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(running_total([3]));                 // [3]
console.log(running_total([]));                  // []
console.log("<----- Number 16 answers end here ----->\n\n");

// #17 Convert a String to a Signed Number

function string_to_signed_integer(str) {
  if (str[0] === '-') { 
    return +str * -1;
  }
  else if (str[0] === '+' || ((+str)+'') === str ) {
    return +str;
  }
  else {
    return "Invalid String";
  }
}

console.log("<----- Number 17 answers start here ----->");
console.log(string_to_signed_integer('4321')); // 4321
console.log(string_to_signed_integer('-570')); // -570
console.log(string_to_signed_integer('+100')); // 100
console.log("<----- Number 17 answers end here ----->\n\n");


// #18 Ascii string value

function ascii_value(str) {
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

console.log("<----- Number 18 answers start here ----->");
console.log(ascii_value('Four score'));     // 984
console.log(ascii_value('Launch School'));  // 1251
console.log(ascii_value('a'));              // 97
console.log(ascii_value(''));               // 0
console.log("<----- Number 18 answers end here ----->\n\n");

// #19 After Midnight

function time_of_day(minutes) {
  var hours = Math.floor(minutes / 60) % 24;
  var minutes = minutes % 60;
  hours = hours >= 0 ? hours+'' : (24 + hours) + '';
  minutes = minutes >= 0 ? minutes+'' : (60 + minutes) + '';
  hours.length === 1 ? hours = '0' + hours : hours;
  minutes.length === 1 ? minutes = '0' + minutes : minutes;
  return (hours + ':' + minutes);
}

console.log("<----- Number 19 answers start here ----->");
console.log(time_of_day(0));      // "00:00"
console.log(time_of_day(-3));     // "23:57"
console.log(time_of_day(35));     // "00:35"
console.log(time_of_day(-1437));  // "00:03"
console.log(time_of_day(3000));   // "02:00"
console.log(time_of_day(800));    // "13:20"
console.log(time_of_day(-4231));  // "01:29"
console.log("<----- Number 19 answers end here ----->\n\n");

// #20 from string to integer using #19

function after_midnight(str) {
  var time = parseTime(str);
  return time === 1440 ? 0 : time;
}

function before_midnight(str) {
  var time = parseTime(str);
  return 1440 - time === 1440 ? 0 : 1440 - time;
}

function parseTime(str) {
  var hours = +(str[0] + str[1]),
      minutes = +(str[3] + str[4]),
      total = hours * 60 + minutes;
  return total;
}

console.log("<----- Number 20 answers start here ----->");
console.log(after_midnight('00:00'));   // 0
console.log(before_midnight('00:00'));  // 0
console.log(after_midnight('12:34'));   // 754
console.log(before_midnight('12:34'));  // 686
console.log(after_midnight('24:00'));   // 0
console.log(before_midnight('24:00'));  // 0
console.log("<----- Number 20 answers end here ----->\n\n");

// #21 Letter Swap 
// Note: strings are immutable... can't swap string locations.

function swap(str) {
  var word_arr = str.split(' '),
      temp_letter,
      temp_arr = [],
      return_arr = [];

  word_arr.forEach(function(word) {
    temp_arr = word.split('')
    temp = temp_arr[0];
    temp_arr[0] = temp_arr[temp_arr.length - 1];
    temp_arr[temp_arr.length - 1] = temp;
    return_arr.push(temp_arr.join('')); 
  });

  return return_arr.join(' ');
}

console.log("<----- Number 21 answers start here ----->");
console.log(swap('Oh what a wonderful day it is'));   // 'hO thaw a londerfuw yad ti si'
console.log(swap('Abcde'));                           // 'ebcdA'
console.log(swap('a'));                               // 'a'
console.log("<----- Number 21 answers end here ----->\n\n");

// #22 clearn up

function cleanup(str) {
  return str.replace(/[^a-z]/g, ' ').replace(/\s+/g, ' ');
}

console.log("<----- Number 22 answers start here ----->");
console.log(cleanup("---what's my +*& line?")); // ' what s my line '
console.log("<----- Number 22 answers end here ----->\n\n");

// #23 letter counter and #24 exclude non-letters

function word_sizes(str) {
  if (str === '') { return {}; }

  var word_arr = str.split(' '),
      collection = {},
      test;

  word_arr.forEach(function(elem) {
    test = elem.toLowerCase().replace(/[^a-z]/g, '');
    if (!collection[test.length]) {
      collection[test.length] = 0;
    }
    collection[test.length]++;
  });
  return collection;
}

console.log("<----- Number 23 and 24 answers start here ----->");
console.log(word_sizes('Four score and seven.'));                       // { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
console.log(word_sizes('Hey diddle diddle, the cat and the fiddle!'));  // { 3 => 5, 6 => 1, 7 => 2 }
console.log(word_sizes("What's up doc?"));                              // { 6 => 1, 2 => 1, 4 => 1 }
console.log(word_sizes(''));                                            // {}
console.log("<----- Number 23 and 24 answers end here ----->\n\n");


// # 25 alphabetical numbers

function alphabetic_number_sort() { 
  var n_word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
      sorted = n_word.slice().sort(),
      return_arr = [];

    n_word.forEach(function(elem) {
      return_arr.push(sorted.indexOf(elem));
    });

    return return_arr;
}


console.log("<----- Number 25 answers start here ----->");
console.log(alphabetic_number_sort());  // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
                                        //  6, 16, 10, 13, 3, 12, 2, 0]
console.log("<----- Number 25 answers end here ----->\n\n");

// #26 daily double

function crunch(str) {
  if (str.length <= 1) { return str; }

  var return_str = str[0],
      current;
  
  for (var i = 1; i < str.length; i++) {
    current = str[i];
    if (str[i - 1] !== str[i]) { return_str += str[i]; }
  }
  return return_str;
}

console.log("<----- Number 26 answers start here ----->");
console.log(crunch('ddaaiillyy ddoouubbllee'));     // 'daily double'
console.log(crunch('4444abcabccba'));               // '4abcabcba'
console.log(crunch('ggggggggggggggg'));             // 'g'
console.log(crunch('a'));                           // 'a'
console.log(crunch(''));                            // ''
console.log("<----- Number 26 answers end here ----->\n\n");

// #27 Delete Vowels

function remove_vowels(arr) {
  var new_arr = [];

  arr.forEach(function(elem) {
    new_arr.push(elem.replace(/[aeiouAEIOU]/g, ''));
  });

  return new_arr;
}

console.log("<----- Number 27 answers start here ----->");
console.log(remove_vowels(["abcdefghijklmnopqrstuvwxyz"]));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(remove_vowels(["green", "YELLOW", "black", "white"]));  // ["grn" "YLLW" "blck" "wht"]
console.log(remove_vowels(["ABC", "AEIOU", "XYZ"]));                // ['BC', '', 'XYZ']
console.log("<----- Number 27 answers end here ----->\n\n");

// #28 Fib Number location by Length

function find_fibonacci_index_by_length(num_digit) {
  var previous = 1,
      current = 1,
      current_str = '',
      i,
      length = 1,
      temp = 0;

  for (i = 2; length < num_digit; i++) {
    temp = previous + current;
    previous = current;
    current = temp;
    current_str = current + '';
    if (current_str.indexOf('e') === -1) {
      length = +current_str.length;
    }
    else {
      length = +current_str.substring(2 + current_str.indexOf('e'));
    }
  }

  return i;
}

console.log("<----- Number 28 answers start here ----->");
console.log(find_fibonacci_index_by_length(2));     // 7
console.log(find_fibonacci_index_by_length(10));    // 45
// console.log(find_fibonacci_index_by_length(100));   // 481  -- comment out this if it takes too long
console.log("<----- Number 28 answers end here ----->\n\n");

// #29 Halvsies

function halvsies(arr) {
  var arr_1 = [],
      arr_2 = [];

  arr_1 = arr.slice(0, Math.ceil(arr.length/2));
  arr_2 = arr.slice(arr_1.length);
  return [arr_1, arr_2];
}

console.log("<----- Number 29 answers start here ----->");
console.log(halvsies([1, 2, 3, 4]));    // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));             // [[5], []]
console.log(halvsies([]));              // [[], []]
console.log("<----- Number 29 answers end here ----->\n\n");

// #30 interleave 

function interleave(arr1, arr2) {
  var return_arr = [];

  arr1.forEach(function(elem, index) {
    return_arr.push(elem);
    return_arr.push(arr2[index]);
  });

  return return_arr;
}

console.log("<----- Number 30 answers start here ----->");
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));        // [1, 'a', 2, 'b', 3, 'c']
console.log("<----- Number 30 answers end here ----->\n\n");