function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  var total = 0;
  var i = 0;
  while (i < values.length) {
    total += values[i];
    i++;
  }
  return total;
}

var temperatures = [73, 58, 81, 64, 67];
console.log(average(temperatures));


function fizzbuzzer(start_num, end_num) {
  for (var i = start_num; i <= end_num; i++) {
    if ((i % 3 == 0) && (i % 5 == 0 )) {
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0 ) {
      console.log("Fizz");
    }
    else if (i % 5 == 0 ) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}

fizzbuzzer(1, 100);

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

console.log(random(50));