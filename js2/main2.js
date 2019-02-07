var message = 'Hello world'

console.log(message)

var car = {
  carName: 'Honda Civic',
  carYear: '2018',
  maxSpeed: '280',
  carClass: function () {
    return 'Sport';
  } 
};

console.log(car);

for (var i = 1; i < 21; i++) {
  if (i % 2 == 0)
  console.log(i);
};

var CityName = 'Kiev',
Status;
switch(CityName) {
case 'Kharkov': Status = 'City'; break;
case 'Andreevka': Status = 'MegaCity'; break;
case 'Bezlyudovka': Status = 'Township'; break;
default: Status = 'central of war ato';
};
console.log(CityName + ' ' + Status);

var y = 23;
var text = y >= 21 ? 'y больше 21' : 'y меньше или равно 21';
console.log(text);

var h = 0;
while(h < 8) {
  console.log(h);
  h++;
};

function matan (arg1, arg2, callback){
  console.log("Число " + arg1 + " в степени " + arg2);
  var arg3 =  (Math.pow(arg1, arg2));
  callback(arg3);
}
matan(2, 4, function(arg3){
  console.log("Результат " + arg3);  
});
