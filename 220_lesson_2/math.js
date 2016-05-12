function radiansToDegrees(radians) {
  return radians / (Math.PI / 180);
}

var degrees = -180;
console.log(Math.abs(degrees));

console.log(Math.sqrt(16777216)); 
console.log(Math.pow(16, 6));

var a = 50.72,
    b = 49.2,
    c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function randomInt(min, max) {
  var difference,
      swap;
  if (min === max) { return min; }
  else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }
  difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
}

console.log(randomInt(1, 5));