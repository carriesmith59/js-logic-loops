console.log('JS Logic Loops');

if ('foo' === 'foo') {
  console.log('Of course these strings are equal')
}

if (5 > 10) {
  console.log('You will NEVER see this')
} else {
  console.log('You will ALWAYS see this')
}

var number=800;

if (number > 100) {
  console.log('greater than 100');
} else {
  console.log(number + ' is not > 100');
}

// is a string stored in a variable, the same as another string?
var myString = 'foo';
if(myString === 'foo'){
    console.log('You are here')
} else {
    console.log('You are in the else')
  }

// the else if statement
if (5 < 4) {
  console.log('you will not end up here');
} else if (5 >= 5){
  console.log('you will end up here')
} else {
  console.log ( 'you will not end up here either')
}

// a function that returns something
function topSpeed(){
  return (75 + 5); // return number 80
}

console.log(topSpeed()); // logs number 80

// write a function that accepts arguments
// this now means that we are required to provide values for those arguments
// when we invoke the function
function addNumbers(num1, num2){
  return (num1 + num2); // the values of my args are now used as vars inside my func
}
console.log(addNumbers(1000, 3000)); // logs 4000 to console

if(addNumbers(50, 50) === 100){
  console.log('Congrats!')
}

function fullName(fName, lName){
  console.log(fName + ' ' + lName)
}

// this function does not return anything, we just 'do something' immediately
// this is a named function
fullName('Carrie', 'Smith');

// we can also create a function and store it in a variable
// it's an anonymous function (because it has no name), stored in variable
var myGreatFunc = function(){
  console.log('function stored in var')
};

myGreatFunc();

// 1) write a function that accepts an argument. lets call the arg 'door'
function openDoor(door){
  console.log(door);
  //based on the value of door, log a prize
  if(door === 'green'){
    console.log('you opened the green door! you win a skateboard')
  }else if(door === 'red'){
    console.log('you opened the red door, you win a scooter')
  }
}

// 2) based on the value of 'door', console.log a prize
openDoor('red');


var foo = {
  color: 'red'
};
console.log(typeof foo);

var cartoons = ['garfield', 'heathcliff', 'snoopy'];
console.log(cartoons.length) // log 3
