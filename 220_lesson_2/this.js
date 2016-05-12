function whatIsMyContext() {
  return this;
}

console.log(whatIsMyContext());
// window object

var my_object = {
  count: 2,
  myMethod: function() {
    return this.count;
  }
};

my_object.myMethod();
// my_object

var my_object = {
  count: 1,
  my_child_object: {
    myMethod: function() {
      return this.count;
    }
  }
};

my_object.my_child_object.myMethod();
// my_child_object

// my_object.my_child_object.myMethod.call(my_object);

var my_object = {
  count: 2,
  myMethod: myFunction
};

function myFunction() {
  return this.count;
}

my_object.myMethod();
// my_object