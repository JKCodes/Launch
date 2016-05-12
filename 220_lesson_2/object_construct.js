function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle(0;)
  }
  return this;
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4
};

var sedan = Vehicle();
var coupe = new Vehicle();
coupe.doors = 2;

function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;

function Motorcycle() {
  var o = this;
  if (!(o instanceof Motorcycle)) {
    o = new Motorcycle();
  }
  o.doors = 0;
  o.wheels = 2;
  return o;
}

Motorcycle.prototype = new Vehicle();

var crx = new Coupe();
var monster = new Motorcycle();

function Sedan() {
}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();

var prototye_car = {
  doors: 5,
  wheels: 3
};

var ceo_car = Object.create(prototye_car);

ceo_car.doors = 7;
