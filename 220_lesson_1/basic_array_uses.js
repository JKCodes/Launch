function firstElement(arr) {
  return arr[0];
}

function lastElement(arr) {
  return arr[arr.length -1];
}

function nthElement(arr, position) {
  return arr[position];
}
// undefined will be returned for both cases

// yes
var digits = []
digits[-1] = -42;
console.log(nthElement(digits, -1));
console.log(digits[-1]);
console.log(digits["-1"]);

function firstN(arr, num) {
  return arr.slice(0, num);
}

function lastN(arr, num) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }
  
  return arr.slice(arr.length - num);
}

function endsOf(beginning_arr, ending_arr) {
  return [beginning_arr[0], ending_arr[ending_arr.length - 1]];
}