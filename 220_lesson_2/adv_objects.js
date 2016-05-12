function NewArray() { }
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() { return this[0]; }

var new_arr = new NewArray(),
    old_arr = new Array();
old_arr.push(5);
new_arr.push(5);
old_arr.push(2);
new_arr.push(2);
console.log(new_arr.first());
console.log(typeof old_arr.first);

function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false
    }
  });
}

var me = newPerson("Shane Riley");
me.log();
me.log = function() { console.log("Amanda Rose"); };
me.log();

var frozen = {
  integer: 4,
  string: "String",
  array: [1, 2, 3],
  object: {
    foo: "bar"
  },
  func: function() { console.log("I'm frozen"); }
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = "Number";
frozen.array.pop();
frozen.object.foo = "baz";
frozen.func = function() { console.log("I'm not really frozen"); };

console.log(frozen.integer);
console.log(frozen.string);
console.log(frozen.array);
console.log(frozen.object.foo);
frozen.func();