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
console.log(addNumbers(1000, 3000));

if(addNumbers(50, 50) === 100){
  console.log('Congrats!')
}
