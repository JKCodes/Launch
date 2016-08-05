var dont_run = true;

if (dont_run) {
  throw new Error("test3.js is prevented from running.");
}

//  #31  All Substrings

function substrings(str) {
  var return_arr = [],
      temp = [];
  for (var i = 0; i < str.length; i++) {
    temp = all_substrings(str, i);
    return_arr = [].concat.call(return_arr, temp);
  }
  return return_arr;
}

function all_substrings(str, start) {
  var return_arr = [],
      counter = 1;
  for (var i = start; i < str.length; i++) {
    return_arr.push(str.substr(start, counter));
    counter++;
  }
  return return_arr;
}


console.log("<----- Number 31 answers start here ----->");
console.log(substrings('abcde'));
  // ['a', 'ab', 'abc', 'abcd', 'abcde', 'b', 'bc', 'bcd', 'bcde', 'c', 'cd', 'cde', 'd', 'de', 'e']
console.log("<----- Number 31 answers end here ----->\n\n");



// #32  Rotate array

function rotate_array(arr) {
  var new_arr = [];

  new_arr = arr.slice(1).concat(arr.slice(0, 1));
  return new_arr;
}

console.log("<----- Number 32 answers start here ----->");
console.log(rotate_array([7, 3, 5, 2, 9, 1]));  // [3, 5, 2, 9, 1, 7]
console.log(rotate_array(['a', 'b', 'c']));     // ['b', 'c', 'a']
console.log(rotate_array(['a']));               // ['a']
console.log("<----- Number 32 answers end here ----->\n\n");


// #33 Rotate Rightmost Digits

function rotate_rightmost_digits(query, num) {
  var query_arr = (query + '').split(''),
      left = query_arr.slice(0, query_arr.length - num);
      right = query_arr.slice(left.length);

  right = rotate_array(right);

  return +(left.concat(right).join(''));
}

console.log("<----- Number 33 answers start here ----->");
console.log(rotate_rightmost_digits(735291, 1)); // 735291
console.log(rotate_rightmost_digits(735291, 2)); // 735219
console.log(rotate_rightmost_digits(735291, 3)); // 735912
console.log(rotate_rightmost_digits(735291, 4)); // 732915  
console.log(rotate_rightmost_digits(735291, 5)); // 752913
console.log(rotate_rightmost_digits(735291, 6)); // 352917
console.log(rotate_rightmost_digits(705291, 6)); // 352917
console.log("<----- Number 33 answers end here ----->\n\n");

// #34 Maximum rotation

function max_rotation(num) {
  var num_arr = (num + '').split(''), 
  left = [],
  right = [],
  temp,
  flag = 0;

  for (var i = 0; i < num_arr.length - flag; i++) {
    left = num_arr.slice(0, i);
    right = num_arr.slice(left.length);
    if (right[1] === "0") {
      if (i === 0) { 
        flag++;
        temp = right.shift();
        right.shift();
        right.unshift(temp);
        right = +(right.join(''));
      }
      else {
        right = rotate_rightmost_digits(+(right.join('')), right.length);
        right = '0' + right;
      }
    }
    else if (right[0] === "0") {
      temp = right.shift();
      right.push(temp);
      right = +(right.join(''));
    }
    else {
      right = rotate_rightmost_digits(+(right.join('')), right.length);
    }

    num_arr = left.concat((right + '').split(''));
  }
  return +(num_arr.join(''));
}

console.log("<----- Number 34 answers start here ----->");
console.log(max_rotation(735291));        // 321579
console.log(max_rotation(3));             // 3
console.log(max_rotation(35));            // 53
console.log(max_rotation(105));           // 15
console.log(max_rotation(8703529146));    // 7321609845
console.log("<----- Number 34 answers end here ----->\n\n");

// #35 Lights

function light(size) {
  var light_arr = Array(size).fill(false),
      final_arr = [];

  for (var i = 1; i < size+1; i++) {
    for (var j = i; j < size+1; j+=i) {
      light_arr[j-1] = light_arr[j-1] === true ? false : true;
    }
  }

  light_arr.forEach(function(elem, index) {
    if (elem) { final_arr.push(index + 1);}
  });

  console.log(final_arr);
  console.log(final_arr.length);
}

console.log("<----- Number 35 answers start here ----->");
console.log(light(1000));
console.log("<----- Number 35 answers end here ----->\n\n");

// #36  Word to Digit

function word_to_digit(str) {
  var dictionary = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9},
      reg;

  for (val in dictionary) {
    reg = RegExp(val, "g");
    str = str.replace(reg, dictionary[val]);
  }
  return str;
}


console.log("<----- Number 36 answers start here ----->");
console.log(word_to_digit('Please call me at five five five one two three four. Thanks.'));
  //  'Please call me at 5 5 5 1 2 3 4. Thanks.'
console.log("<----- Number 36 answers end here ----->\n\n");

// #37 Fib recursion

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  return(fibonacci(num - 1) + fibonacci(num - 2));
}

console.log("<----- Number 37 answers start here ----->");
console.log(fibonacci(1));  // 1
console.log(fibonacci(2));  // 1
console.log(fibonacci(3));  // 2
console.log(fibonacci(4));  // 3
console.log(fibonacci(5));  // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log("<----- Number 37 answers end here ----->\n\n");

// #38 Longest Sentence

function longest() {
  var sentence =  "Four score and seven years ago our fathers brought forth " +
                  "on this continent a new nation, conceived in liberty, and " +
                  "dedicated to the proposition that all men are created " +
                  "equal. " +
                  "Now we are engaged in a great civil war, testing whether " +
                  "that nation, or any nation so conceived and so dedicated, " +
                  "can long endure. We are met on a great battlefield of that " +
                  "war. We have come to dedicate a portion of that field, as " +
                  "a final resting place for those who here gave their lives " +
                  "that that nation might live. It is altogether fitting and " +
                  "proper that we should do this. " +
                  "But, in a larger sense, we can not dedicate, we can not " +
                  "consecrate, we can not hallow this ground. The brave " +
                  "men, living and dead, who struggled here, have " +
                  "consecrated it, far above our poor power to add or " +
                  "detract. The world will little note, nor long remember " +
                  "what we say here, but it can never forget what they " +
                  "did here. It is for us the living, rather, to be dedicated " +
                  "here to the unfinished work which they who fought " +
                  "here have thus far so nobly advanced. It is rather for " +
                  "us to be here dedicated to the great task remaining " +
                  "before us -- that from these honored dead we take " +
                  "increased devotion to that cause for which they gave " +
                  "the last full measure of devotion -- that we here highly " +
                  "resolve that these dead shall not have died in vain " +
                  "-- that this nation, under God, shall have a new birth " +
                  "of freedom -- and that government of the people, by " +
                  "the people, for the people, shall not perish from the " +
                  "earth.",
      sentence_arr = sentence.split(' '),
      longest_count = 0,
      current = 0;

      sentence_arr.forEach(function(elem) {
        current++;
        if (longest_count < current) {
          longest_count = current;
        }
        if (elem.includes('.') || elem.includes('!') || elem.includes('?')) {
          current = 0;
        }
      });
  return longest_count;
}

console.log("<----- Number 38 answers start here ----->");
console.log(longest());  // 86
console.log("<----- Number 38 answers end here ----->\n\n");

// #39  Matching Parens

function balanced(str) {
  var counter = 0,
      open_paren = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === ')') {
      str[i] === '(' ? counter++ : counter--; 
      if (counter === -1) { return false; }
    } 
  }
  return counter === 0;
}

console.log("<----- Number 39 answers start here ----->");
console.log(balanced("What (is) this?"));        // true
console.log(balanced("What is) this?"));         // false
console.log(balanced("What (is this?"));         // false
console.log(balanced("((What) (is this))?"));    // true
console.log(balanced("((What)) (is this))?"));   // false
console.log(balanced("Hey!"));                   // true
console.log(balanced(")Hey!("));                 // false
console.log(balanced("What ((is))) up("));       // false
console.log("<----- Number 39 answers end here ----->\n\n");

// #40 Next Featured Number Higher than a Given Value

function featured(num) {
  var flag = true;
  while (flag) {
    num++;
    if (num % 2 === 1 && num % 7 === 0) {
      flag = false;
    }
  }
  
  flag = true;
  
  while (flag) {
    if (num > 9876543210) {
      return "There is no possible number that fulfills those requirements";
    }
    else if ((/([0-9]).*?\1/).test(num + '')) {
      num += 14;
    }
    else {
      break;
    }
  }
  return num;
}

console.log("<----- Number 40 answers start here ----->");
console.log(featured(12));          // 21
console.log(featured(20));          // 21
console.log(featured(21));          // 35
console.log(featured(997));         // 1029
console.log(featured(1029));        // 1043
console.log(featured(999999));      // 1023547
console.log(featured(999999987));   // 1023456987
console.log(featured(9999999999));  // There is no possible number that fulfills those requirements
console.log("<----- Number 40 answers end here ----->\n\n");