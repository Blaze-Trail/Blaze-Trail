document.write('Hello world!')
let a = 4;
let c = 4;

var x = 60;
var y = document.write('The value of ', x > 50 ? 'True' : 'False');
console.log(x > 50 ? 'True' : 'False')

let x = 20;

if (x < 20)
{ console.log('X is greater than 20') }
else if (x = 20) { console.log('X is equal to 20') }
else { console.log('X is is less than 20') }

var y = 10;
if (x % 2 == 0) { console.log('This is an even number') }
else { console.log('This is an odd number') }

var b = 0;

if (b > 0) {
    if (b % 2 == 0) {
        console.log('The letter b is positive and an even number')
    }
    else {
        console.log('The letter b is a positive but an odd number')
    } 
}
else if (b < 0) {
    if (b % 2 == 0) {
        console.log('The letter is negative and an even number')
    }
    else {
        console.log('The letter b is negative but an odd number')
    }
}
else {
    console.log('The letter b is equal to zero')
}

if (b > 0 && b % 2 == 0) {
    console.log('The letter be is a positive number and an even number')
}
else if (b > 0 && b % 2 == 1) {
        console.log('The letter be is a positive number and also an odd number')
}
else if (b < 0 && b % 2 == 0) {
    console.log('The letter b is a negative number and an even number')
}
else if (b < 0 && b % 2 == -1) {
    console.log('The letter b is a negative number and also an odd number')
}
else {
    console.log('The letter b is eqall to zero')
}