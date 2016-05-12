function say() {
  if (false) {
    var a = "hello from inside a block";
  }
  console.log(a);
}
say();
// undefined

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
// hello
// a not defined error

var a = "hello";

for (var i = 0; i < 5; i++) {
  var a = i;
}

console.log(a);
// 4

var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }
  return bar();
}

console.log(foo());
console.log(a);
// 4
// 3

a = "global"

function checkScope() {
  var a = "local";
  function nested() {
    var a = "nested";
    function supernested() {
      a = "supernested";
      return a;
    }
    return supernested();
  }
  return nested();
}
console.log(checkScope());
console.log(a);
// supernested
// global

var a = "outer";
var b = "outer";

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = "inner";
  b = "inner";
}
// outer
// outer
// outer
// inner

var a = "outer";

console.log(a);
setScope(a);
console.log(a);

var setScope = function() {
  a = "inner";
}

// outer
// TypeError for setScope