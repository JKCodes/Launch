var total = 50;
var increment = 15;
function incrementBy(increment) {
  total += increment;
}
console.log(total);
incrementBy(increment);
console.log(total);
incrementBy();
console.log(total);

var fruit = "apple";

function setFruitType() {
  fruit = "banana";
}

console.log(fruit);
setFruitType();
console.log(fruit);

var groceries = {
  apples: .99,
  oranges: 1.35,
  bananas: 2.25
};

function getTotal(items) {
  var total = 0;

  for (var item in items) {
    total += items[item];
  }
  items.total = total;
}

getTotal(groceries);
console.log(groceries.total);

var temperatures = [53, 86, 12, 43];

function removeLastTemperature(temps) {
  return temps.pop();
}

removeLastTemperature(temperatures);
console.log(temperatures);


function average() {
  var total = 0;

  for (var i = this.length - 1; i >= 0; i--) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average(temperatures));
console.log(average.call(temperatures));
console.log(average.apply(temperatures));

var averageTemperature = average.bind(temperatures);

console.log(averageTemperature());
temperatures.push(115);
console.log(averageTemperature());
temperatures.average = average
console.log(temperatures.average());