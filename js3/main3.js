var counter =  (function () {
  var count = 0;

  return function (num) {
    count = num !== undefined ? num : count;
    return count++;
  };
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());



var greet = function() {
  return 'The max speed of this car' + this.maxSpeed;
};
var car = {
  name: 'Dodge',
  maxSpeed: '250',
  greet: greet
}

var oneMoreCar = {
  name: 'Porsche',
  maxSpeed: '290',
  greet: greet
}
console.log(car.greet())
console.log(oneMoreCar.greet());



var greet = function() {
  return 'The max speed of this car' + this.maxSpeed;
};
var car = {
  name: 'Dodge',
  maxSpeed: '250',
  _mileage: 21000,
  get miliage(){
    return this._mileage;
  },
  set miliage(value){
    this._mileage = value < 0 ? 0 : value ;
  }
}

var oneMoreCar = {
  name: 'Porsche',
  maxSpeed: '290',
  mile: 15000,
   get mile(){
    return this._mile;
  },
  set mile(value){
    this._mile = value < 0 ? 0 : value ;
  }
}

car.miliage = -20;
console.log(car.miliage);
car.miliage = 0;
console.log(car.miliage);
car.miliage = 2000;
console.log(car.miliage);

oneMoreCar.mile = -10;
console.log(oneMoreCar.mile);
oneMoreCar.mile = 0;
console.log(oneMoreCar.mile);
oneMoreCar.mile = 1000;
console.log(oneMoreCar.mile);