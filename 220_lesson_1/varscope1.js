var a = "outer";

function testScope() {
  var a = "inner";
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
// outer
// inner
// outer

var a = "outer";

function testScope() {
  a = "inner";
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
// outer
// inner
// inner

var basket = "empty";

function goShopping() {
  function shop1() {
    basket = "tv";
  }

  console.log(basket);

  function shop2() {
    basket = "computer";
  }

  function shop3() {
    var basket = "play station";
    console.log(basket);
  }

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();
// empty
// play station
// computer


console.log(a);

var a = 1;
// undefined

console.log(a);

function hello() {
  a = 1;
}
// undefined

function hello() {
  a = "hello";
}

hello();
console.log(a);
// hello


function hello() {
  var a = "hello"
}

hello();
console.log(a);
// undefined reference error