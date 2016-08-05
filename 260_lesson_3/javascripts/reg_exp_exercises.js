var lyric = "123, easy as 123";

console.log(lyric.replace(/\d+/, "ABC"));

function startsUppercase(str) {
  return /^[A-Z]/.test(str);
}

console.log(startsUppercase("Hello world"));
console.log(startsUppercase("goodbye browser"));

function regexTrim(str) {
  return str.replace(/^\s+|\s+$/g, ""); // ^ is starts with, | is or, $ is ends with
}

console.log(regexTrim("  No spaces at the start"));
console.log(regexTrim("No spaces at the end  "));
console.log(regexTrim("  No spaces surrounding  "));

console.log("$ plus $$ equals $$$".match(/\$/g).length);

var passing_sentence = "The characters that specify repetition always follow the pattern to which they are being applied.";
var failing_sentence = "I am the 1337est";

function hasLongWord(str) {
  return /[A-Z]{5,7}/i.test(str);
}

console.log(hasLongWord(passing_sentence));
console.log(hasLongWord(failing_sentence));

var query = "Hen";
var source = "She'll be coming 'round the mountain when she comes";
var regex = new RegExp(query, "i");

console.log(regex.test(source));

var hello = "H%*e(ll)o^";
hello.match(/\w/g).join("");

var single_quotes = "'Hello world'";
var double_quotes = "\"Hello world\"";
var mismatched_quotes = "'Hello world\"";

function hasMatchedQuotes(str) {
  return /(['"])[^'"]+\1/.test(str);
}

console.log(hasMatchedQuotes(single_quotes));
console.log(hasMatchedQuotes(double_quotes));
console.log(hasMatchedQuotes(mismatched_quotes));

var phone_regex = /^\(\d{3}\) \d{3}-\d{4}$/;
console.log(phone_regex.test("(222) 555-1212"));
console.log(phone_regex.test("(222) 555-1212x150"));
console.log(phone_regex.test("1-(222) 555-1212"));

var phone_regex = /^\d?-?\(\d{3}\) \d{3}-\d{4}x?\d*$/;
console.log(phone_regex.test("(222) 555-1212"));
console.log(phone_regex.test("(222) 555-1212x150"));
console.log(phone_regex.test("1-(222) 555-1212"));