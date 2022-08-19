//document.write('Hello world!')
let a = 4;
let c = 4;

var x = 40;
var y = document.write('The value of ', x > 50 ? 'True' : 'False');
console.log(x > 50 ? 'True' : 'False')
let abc = 70;
let abcd = document.write('The value of abcd ', abc =70? true:false)

let myScore = 40;

if (myScore >= 70) {
    console.log('myScore is greater than 70')
    } else if (myScore >= 55) {
    console.log('myScore is greater is 55 or even more but not up to 70')
    } else {
    console.log('myScore is is less than 55')
}
xy = 4
if (xy > 50) {
    console.log('xy is greater than 50')
  } else if (xy > 5) {
    console.log('xy is greater than 5')
  } else {
    console.log('xy is less than 5')
  }

var y = 10;
if (x % 2 == 0) { console.log('This is an even number') }
else { console.log('This is an odd number') }

function classOfDegree(a, b) {
    if (a === 70 && b === 70) {
            console.log('This student will graduate with first class.')
        }
        else if (a === 50 && b === 50) {
            console.log('This student must graduate with second class')
    }
    else if (a === 40 || b === 50) {
        console.log('This student must graduate with second class')
    }
        else {
            console.log('This student may graduate with third class.')
    }
    
}
console.log(classOfDegree(40, 50))

let dayOfWeek = 5;
function weekDay(day){
    switch (day) {
        case 1: console.log('Today is Monday');
            break;
        case 2: console.log('Today is Tuesday');
            break;
        case 3: console.log('Today is Wednesday');
            break;
        case 4: console.log('Today is Thursday');
            break;
        case 5: console.log('Today is Friday');
            break;
        case 6: console.log('Today is Saturday');
            break;
        case 7: console.log('Today is Sunday');
            break;
        default: console.log('Your number enteries must be from 1 to 7.');
        }
}
console.log(weekDay(6))

function workDay(day){
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thurday':
        case 'Friday': console.log('It is a working day in Nigeria')
        break;
        case 'Saturday':
        case 'Sunday': console.log('It is weekend and not working day in Nigeria')

    }
}
workDay('Sunday')

var b = -4;

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

// alert("Hello Chukwunonso")

// switch statement start}
function mySwitch() {
    var month = 2;

    switch (month) {
        case 1: console.log('January');
            break;
        case 2: console.log('February');
            break;
        case 3: console.log('March');
            break;
        case 4: console.log('April');
            break;
        case 5: console.log('May');
            break;
        case 6: console.log('June');
            break;
        case 7: console.log('July');
            break;
        case 8: console.log('August');
            break;
        case 9: console.log('September');
            break;
        case 10: console.log('October');
            break;
        case 11: console.log('November');
            break;
        case 12: console.log('My birth month is December');
            break;
        default: console.log('Wrong input. Your input must be between 1 to 12');

    }
}
var mm = mySwitch()

console.log(mm)
// switch statement end
var mySum

function addtion(x, y) {
     mySum = (x + y) / 2;
    return mySum;
}

console.log(addtion(5, 7))

//document.write(' ' + mySum);

var day = 'Saturday';


function dayOfTheWeek() {
    switch(day) {
    case 'Monday': console.log(1);
        break;
    case 'Tuesday': console.log(2);
        break;
        case 'Wednesday': console.log(3);
        break;
    case 'Thursday': console.log(4);
        break;
    case 'Friday': console.log(5);
        break;
    case 'Saturday': console.log(6);
        break;
    case 'Sunday': console.log(7);
        break;
    default: console.log('Not a valid day of the week');
    }
}

var $showDay = dayOfTheWeek();

//document.write(day)

// escape sequence
console.log("Hi dear, `welcome` to JavaScript programming.")
console.log("Hi dear, \"welcome\" to JavaScript programming.")
console.log('Hi dear, "welcome" to JavaScript programming.')
// printing backslash
console.log('This is called a backslash (\\\).')

var car1 = 'Honda';
var car2 = 'Mercedez';
var car3 = 'Toyota';

// document.write('<h2>'+car1+'</h2>')
// document.write('<h2>car3</h2>')
// document.write('<h2>'+car3+'</h2>')
var myCars = ['Honda', 'Hiace', 'Toyota'];
myCars.push('Jagwa');
myCars.push('Mecedez')

for (i = 0; i < myCars.length; i++){
    console.log('I have '+myCars[i]+' in my car garrage.')
}

// for (i = 0; i < 4; i++) {
//     document.write("<h1>" + myCars[i] + ' ' + "</h1>")
// }
// console.log(myCars.sort)

// var fruits = new Array('Oranges', 'Apple', 'Mango', 'Cucumba')
// fruits.push('Carrot')

// for (i = 0; i < fruits.length; i++) {
//     document.write('<h1>' + fruits[i] + '</h1>');
//     console.log(fruits.length);
// }

/*the pop metthod remove the last element from the array*/

//  object

var carInform = {
    carName: 'Lexus',
    carBrand: '350',
    yearManufactured: 2011,
    carPrice: 2000000,
    carQuality: function () {
        return('This a four feel drive')
    }
}

console.log(carInform)

document.write('<h1>' + carInform.carQuality() + '</h1>');

function carInfo(carName, carBrand, yearManufactured, carPrice) {
    this.carName = carName;
    this.carBrand = carBrand;
    this.yearManufactured = yearManufactured;
    this.carPrice = carPrice;
    this.carQuality = function () {
        return ('This is a four wheel drive car.')
    }
}

var c1 = new carInfo('Toyota', 'Toyota Corolla', 2010, 25000000);
console.log(c1.carQuality(), c1.carName, c1.yearManufactured)

//document.write('<h2>' + c1.carQuality() + '</h2>')
var c2 = new carInfo('Honda', 'End of Discussion', 2012, 3000000)
console.log(c2.carPrice)

//document.write('<h2>'+'The price of Honda is ' + c2.carPrice + '</h2>')


function fruitVariety(fruitName, vitaminContent, botanicalName) {
    this.fruitName = fruitName;
    this.vitaminContent = vitaminContent;
    this.botanicalName = botanicalName;
    fruitDescription = function () {
        return('This should be served as an apetizer')
    }
}

var fruit1 = new fruitVariety('Oranges', 'Vitamic C', 'Oraimo Cimatop')
var fruit2 = new fruitVariety('Apple', 'Vitamin A', 'Chriptomin')
//document.write(fruit1.fruitName)
//document.write(fruitDescription());

var studentInfo = new String('Chukwunonso Kelvin');

console.log(typeof (studentInfo));
console.log(typeof (day));
//document.write('<h2>' + studentInfo + '</h2>')

fruitVariety.fruitPrice = 300;

//document.write('<h1>' + fruitVariety.fruitPrice + '</h1>')

fruitVariety.newFun = function() {
    return("This fruit is tasty")
}


//document.write('<h1>' + fruitVariety.newFun()+ '</h1>')

//how to delete an item in an object
delete fruitVariety.fruitPrice;

fruitVariety.fruitPrice = '1000'

console.log(fruitVariety.fruitPrice)
console.log(typeof (fruitVariety.fruitPrice))

//syntax for object constructor method.
var obj_name = new Object;

console.log(typeof(obj_name))

function rectangle(length, width) {
    this.length = length;
    this.width = width;
    this.getarea = function () {
        return length*width
    }
    this.getperimeter = function () {
        return (2*length + 2*width)
    }
}

var rec1 = new rectangle(5, 10)
console.log(rec1.getperimeter())

// base constructor
function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
function lengthArea(length, width) {
    this.length = length;
    this.width = width;
    this.getWidth = function () {
        return 2 * length - 2 * width;
    }
    this.getSpace = function () {
        return length / width;
    }
}
let newArea = new lengthArea(30, 20)
console.log(newArea.getWidth(), newArea.getSpace())

var employee1 = new employee(1, 'James', 120000);

employee.prototype.post = function () {
    return (this.name+' '+'is being paid the sum of '+this.salary)
}

console.log(employee1)

// derived constructor
function programmer(id, name, salary, language, yearOfExperience){
    employee.call(this, id, name, salary);
        this.language = language;
        this.yearOfExperience = yearOfExperience;
}

programmer.prototype.description = function () {
    return('My name is '+this.name+'. I am currently learning '+this.language+' with '+this.yearOfExperience+' year experience.')
}

programmer.prototype = new Object(employee.prototype);

var employee2 = new programmer(2, 'Chukwunonso', 20000, 'JarvaScript', 2);

console.log(employee2);

// document.write(employee2.description())

// how to create a class

class student  {
    constructor(id, name, dateOfBirth, course, yearOfEntry, school){
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.course = course;
        this.yearOfEntry = yearOfEntry
        this.school = school;
    }
    School() {
        return ('My name is '+this.name+' and the name of my school is '+this.school)
    }
    dob() {
        return('I was born in '+this.dateOfBirth+'. Hence, I am already '+(2022 - this.dateOfBirth)+'.')
    }
    static add(a, b) {
        return a + b;
    }
}
//the functions inside the above class is called methods

var student1 = new student(1, 'Uchenna', 1992, 'German', 2016, 'University of Nigeria, Nsukka.')

console.log(student1)

console.log(student.add(50, 5))

//derived class

class studentInformation extends student {
    constructor(id, name, dateOfBirth, course, yearOfEntry, school, yearOfGraduation, gender) {
        super(id, name, dateOfBirth, course, yearOfEntry, school);
        this.yearOfGraduation = yearOfGraduation;
        this.gender = gender;   
    }
}

var student2 = new studentInformation(2, 'Kelvin', 1989, 'Mass Communication', 2008, 'University of Nigeria, Nsukka.', 2012, 'Male')

console.log(student2)


function fun() {
    x = document.getElementsByClassName('cl');
    for (i = 0; i < x.length; i++){
        x[i].style.color = 'Blue';
        x[i].style.backgroundColor = 'Yellow';
    }
}

var months = 1;
function myMonth(months) {
    
switch (months) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    default: 
        console.log('Month not available')
    }
}

//document.write(myMonth())


// function clFun() {
//     var header = document.getElementsByTagName('h2');
//     setTimeout(function () {
//         for (i = 0; i < header.length; i++) {
//             header[i].style.color = 'Blue'
//             header[i].style.fontSize = '1rem'
//         } alertMe()
//     },2000)
// }

function clFun() {
    var header = document.getElementsByTagName('h2');
    id = setTimeout(alertMe, 5000)
    setTimeout(function () {
        for (i = 0; i < header.length; i++) {
            header[i].style.color = 'Blue'
            header[i].style.fontSize = '1rem'
        }alertMe()
    }, 5000)
    
}

/*not working
function alertMe() {
    setTimeout(function () {
        alert('Helo');
        clcFun();
    }, 2000)
}
*/


var alertMe = () => alert('I just reduced the font size of the heading above.')

var id = 0;

// function stop() {
//     clearTimeout(id)
// }

function fun1() {
    setTimeout(function() {
        console.log('This is function 1');
    }, 5000)
}
function fun2() {
    setTimeout(function() {
        console.log('This is function 2');
    }, 2000)
}
function fun3() {
    setTimeout(function () {
        console.log('This is function 3')
},7000)
}
fun1();
fun2();
fun3();
//setTimeout(fun2, 5000)
//setTimeout(fun3, 10000)

//Callback function
function myFriend(friend, myName) {
    setTimeout(function() {
    console.log("My friend's name is " + friend);
    myName();}, 5000)
}
function myName() {
    setTimeout(function() {
        console.log('My name is Chukwunonso');
    }, 3000)
}

myFriend('Kenneth', myName);
//myName();

// Promise
var prom = new Promise(function (resolved, rejected){
    drive = true;
if (drive) {
    resolved('Yes,');
}
else {
    rejected();
    }
})

prom.then(function(resolved){
    console.log(resolved+ 'the user knows how to drive.')
})


var cook = new Promise(function (resolved, rejected) {
    var howToCook = false;
    if (howToCook) {
        resolved('Yes, ')
    }
    else {
        rejected('No, ')
    }
})

cook.then(function (resolved) {
    console.log(resolved+ 'I know how to cook egusi soup.')
}).catch(function (rejected) {
    console.log(rejected+ 'I do not know how to cook egusi soup.')
})

var inSchool = new Promise(function (resolve, reject) {
    inSchoolNow = false;
    if (inSchoolNow) {
        resolve();
    }
    else {
        reject()
    }
})

inSchool.then(function (resolve) {
    console.log('We are in school right now')
}).catch(function (reject) {
    console.log('Schools are currently on strike.')
})


function mySchool(schoolName) {
setTimeout(function () {
        
    console.log('The name of my school is ' + schoolName);
        courseOfStudy();
        
    },10000)
}

function courseOfStudy() {
    console.log('I am studying Mass Communication')
}


mySchool('UNN')

function myBio(bio) {
    var bio = {
        name: 'Chukwunonso Kelvin',
        address: 'Warri, Delta State',
        gender: 'Male,',
        eduQual: 'BA in Mass Communication',
        stateOfOrigin: 'Enugu',
        nationality: 'Nigeria'
    };
    return  console.log('I am from '+bio.stateOfOrigin+'. I am a '+bio.gender);
}

function myDetails(name, myBio) {
    setTimeout(function () {
        console.log(name+' is my name. Find my details below:');
        myBio();
    }, 3000)
}

// console.log(myBio())
myDetails('Chukwunonso', myBio)

var available = new Promise(function (out, inside) {
    var steppedOut = false;
    if (steppedOut) {
        out();
    }
    else {
        inside();
    }
})

available.then(function () {
    console.log('I am not availble in the house right now. Check me later.')
}).catch(function () {
    console.log('I am  availble in the house right now.')
})

// arrow function
var addMe = (a, b) => {
    return a + b;
}

var arrowFun = (a, b) => a + b;
var arrowFun2 = () => console.log('Welcome to Simplicode')
console.log(addMe(10, 30))
console.log(arrowFun(10, 30))
arrowFun2()


function coffeeOrder() {
    console.log('Hello, here is your black coffee. Enjoy your day.')
}


try {
    coffeeOrder();
    coffeeProcessed();
} catch {
    console.log('This program does not exist.');
    // console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}
finally {
    console.log('This block will be executed no matter what.')
}

function friedRice() {
    var contain = ' ';
    if (contain === 'carrot') {
        console.log('The fried rice has carrot in it.');
    }
    else {
        console.log('The fried rice does not contain carrot in it.');
    }
    
}

friedRice()

// throw
/*
var c5 = 0;
if (c5 < 10) {
    throw new Error('This error has been customized')
}
else {
    console.log('Everything is working fine.')
}
*/

// regular expression (to make this case insensitive, add the letter "i" after the last forward slash). Use the letter "g" to find multiples
var regex = /HeLlo!/i;
var strContain = 'Do let me me know once you are ready. Hello!';

var outPut = regex.exec(strContain);
//console.log(outPut)

var outPut2 = regex.test(strContain)
console.log(outPut2)

//replace function

var outPut3 = strContain.replace(regex, 'Hi')

console.log(outPut3)

var myPassword = /[a-z]def/;
var values = 'tdef';
var outPut4 = myPassword.test(values)
console.log(outPut4)
var outPut5 = myPassword.exec(values);
console.log(outPut5)

// Form validation
function subFun() {
    var empId = document.getElementById('emp').value
    var idInput = /[AB]\W234[10 - 99]/i;
    if ((idInput.test(empId))) {
    alert('Your ID is correct.')
    }
    else {
        alert('This is incorrect.')
}
}

function validateForm() {
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('pass').value;

    if (uname.trim() == '' || email.trim() == '' || age.trim() == '' || password.trim() == '') {
        alert('All fields must be completed');
        return false;
    }
    else if (uname == 'Duch' && email == 'duch@gmail.com' && age >= 18 && password == 'Duch@100') {
        alert('Successful login')
        return true;
    }
    else {
        alert('Wrong username or password')
        return false;
    }
}

// email validation
function validateEmail() {
    var email = document.getElementById('email').value;
    var regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2, 6})$/;
    if (email.trim() == ' ') {
        alert('Email field must be provided');
    }
    else if((regex.test(email))) {
        alert('Email submitted successfully.');
    }
    else {
        alert('Wrong email id.');
    }
}
// let profile = document.getElementsByClassName('.show-menu');
// let profiles = document.getElementsByClassName('.profile-details');


// profiles.addEventListener('click', () => {
//    profile.classList.add('show-menu')
// })

// const hello = document.querySelector('.showme');
// const addme = document.querySelector('.profile-contents');
// const border = document.querySelector('.border') 



// addme.addEventListener('click', function() {
//     addme.classList.remove('show')
    
// })

// let test = document.querySelector('.test');
// let test2 = document.querySelector('test2')
// let increase = document.querySelector('#increase')


// test.addEventListener('click', function() {
//     test.classList.add('test2')
// })

// increase.addEventListener('click', function() {
//     increase.classList.remove('test2')
// })

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.profile')) {
//       var dropdowns = document.getElementsByClassName("profile-contents");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
// }
  

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let myBaby = ['Judith Agu', 30, 'Enugu State', 'Female']
myBaby.push('Currently doing her NYSC')
myBaby.pop('She has accepted to marry me.')
for (i = 0; i < myBaby.length; i++){
    //document.write('These are my Baby\'s details: ' + myBaby[i])
    document.write(myBaby[i]+','+ ' ')
}


let myCar = {
    carName: 'Toyota',
    carModel: 'Corolla',
    yearManufactured: '2006',
    price: 2100000,
    driver: 'Henry Chukwuebuka',
    usedFor: function () {
        return('This car is being used for Uber business in Abuja')
    }
}
myCar.car_color = 'Ash'
document.write("<br>")
console.log(myCar)
document.write(myCar.usedFor())

//Class
class studentIn {
    constructor(name, age, course, regNo) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.regNo = regNo;
    }
    dob() {
        return ('My name is '+this.name+' and I was born in '+2022 - this.age)
    }
}

let cc1 = new studentIn('Ademola Koledoye', 1980, 'Statistic', '2008/170033')
console.log(cc1)
console.log(cc1.dob())

class student3 extends studentIn {
    constructor(name, age, course, regNo, state, nationality) {
        super(name, age, course, regNo);
        this.state = state;
        this.nationality = nationality;
    }
}

function waecResult() {
    setTimeout(function () {
        console.log('My result is out!');
        waecStatus();
    },10000)
}

function waecStatus() {
    console.log('I credited all my subjects.')
}

waecResult();
//console.log(waecStatus());

//promise
let newProm = new Promise(function (resolved1, rejected2) {
    let drive = false;
    if (drive) {
        resolved1('Yes');
    }
    else {
        rejected2('No')
    }
})
function resolutionStatus(){
newProm.then(function (resolved1) {
    console.log(resolved1+", this was resolved")
}).catch(function (rejected2) {
    console.log(rejected2+", this was not resolved")
})
}
resolutionStatus()

let showAlert = () => alert("My name is Duchblaze!");

function start() {
    setTimeout(showAlert, 2000);
}
// function start() {
//     setTimeout(function () {
//         alert("My name is Duchblaze!");
//     }, 1000)
// }

// let stopAlert = 0
// function stop() {
//     clearTimeout(stopAlert)
// }

function makeOrder() {
    console.log("Here is your coffee; enjoy your day!")
}
// product();

try {
    makeOrder();
    product();
} catch (error) {
    console.log("Oops: There is an error in your program.")
    // console.log(error.name);
    // console.log(error.message);
}
// finally {
//     console.log("This block will be executed regarless!")
// }

// throw keyword


let xyz = 30;
if (xyz < 20) {
    throw new Error("This is a customized error.")
} else {
    console.log("The value of \"XYZ\" is not less than 20")
}

let regularExp = /Hello/; //putting the letter i after the last slash ensures that the it is not case sensitive
// while the letter g returns all the string when apeared several times.
let str1 = 'I will love you forever Duch. Hello my Sweetheart!'
// let findRegExp = regularExp.exec(str1);
// console.log(findRegExp)
// test() functions returns true of false
// match() let findRegExp = str1.match(regularExp);
//replace() this is used to replace the matching word.
//let output = str1.replace(regularExp,  "Hi");
let output1 = str1.replace(regularExp, "Hi");
console.log(str1)
// metta character ^ checks if the character started with ...
// $ checks the last word that ended the string.
// when you put a question mark sign in front of a  letter, it means the letter is optionational
//  validation regular expression
let regexVal = /[abc]def/;
// range of character [a - z]
//not to include [^def]
//\d works for digit only /\d321/ /\d+321/
//\D will return the letters inside a number /\D321/
//\w
// \s checks for white space inverse \S returns everything order than space.

let str2 = "bdef";
let regexOutput = regexVal.test(str2);
console.log(regexOutput);

function valSum() {
    let valid = document.querySelector(".valid").value;
    let check = /[ABC]255[10 -99]/;
    if ((check.test(valid))) {
        alert("Employer was ID validated")
    } else {
        alert("Employer ID was not validated.")
    }
}

//form validation tuturial


function validateForm() {
    let username = document.querySelector(".username").value;
    let email = document.querySelector(".email").value;
    let age = document.querySelector(".age").value;
    // let submit = document.querySelector(".submit").value;
    if (username.trim == "" || email.trim == "" || age.trim() == "") {
        alert("Details must not be empty")
        return false;
    } else if (age < 18) {
        alert("You are underaged");
        return false
    }
    else if (username === "casadu" && email === "casadu@seamfix.com" && age >= 18) {
        alert("Login was successful");
        return true;
    } else {
        alert("Wrong login details provided.")
    }
}

function subFormClick() {
    let emailID = document.querySelector(".emailID").value;
    let regex = /^([a-z A-Z 0-9 \W \. _]+)@([A-Z a-z 0-9]+).([a-z A-z]{2,6})$/;
    if (emailID.trim() == "") {
        alert("Email is empty")
    } else if ((regex.test(emailID))) {
        alert("Valid email address has been provided")
    } else {
        alert("Provide a valid email address")
    }
}

//ondblclick="add()"

function addNumbers() {
    let num1 = document.querySelector(".no1").value
    let num2 = document.querySelector(".no2").value
    //let showValue = num1 + num2;
    console.log(num1 + num2)
}
let carBrands = ["Toyota", "Mercedez", "Audi", "Hunder"]

// for (i = 0; i < carBrands.length; i++){
//     console.log(carBrands[i])
// }
for (let i of carBrands) {
    console.log(i)
}

//working on iteration

function carBranded(values) {
    let index = 0;
    return {
        next: function() {
            if (index < values.length)
                return {
                value: values[index++],
                done: false
                }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let arr = ["Toyota", "Hyunda", "Mercedez", "Honda"];

let newCar = carBranded(arr);

console.log((newCar.next()).value);
console.log((newCar.next()).value);
console.log((newCar.next()).value);
console.log((newCar.next()).value);
console.log((newCar.next()).value);


function listOfStates(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                return {
                    value: values[index++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let statesInNig = ["Abia", "Adamawa", "Akwa-Ibom", "Anambra", "Borno"];

let newStates = listOfStates(statesInNig);
// console.log(newStates.next())
// console.log(newStates.next())
// console.log(newStates.next())
// console.log(newStates.next())
// console.log(newStates.next())
// console.log(newStates.next())
console.log(newStates.next())
console.log(newStates.next())
console.log(newStates.next())
console.log(newStates.next())
console.log(newStates.next())
console.log(newStates.next())

function seamfixStaff(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                return {
                    value: values[index++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let staff = ['Ademola Koledoye', "Tochukwu Emeasoba", "Livinus Enoja"];
let newStaff = seamfixStaff(staff);
console.log((newStaff.next()).value)
console.log((newStaff.next()).value)
console.log((newStaff.next()).value)

function attire(values) {
    let x = 0;
    return {
        next: function () {
            if (x < values.length) {
                return {
                    value: values[x++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let myAttire = ['Tradition', 'Suit', 'Casual'];
let newAttire = attire(myAttire);
console.log(newAttire.next()) 
console.log(newAttire.next()) 
console.log(newAttire.next()) 
console.log(newAttire.next()) 

/*function* roomItems() {
    let x = 0;
    yield 'Table';
    yield 'Bed';
    yield 'TV';
}
let newRoomItem = roomItems();
console.log((newRoomItem.next()).value)
console.log(newRoomItem.next())
console.log(newRoomItem.next())
console.log(newRoomItem.next())*/

//using a generator with loop

function* myVillage() {
    let i = 0;
    let villages = ['Ibagwa-aka', 'Iheaka', 'Obukpa']
    while (i < villages.length) {
        yield villages[i]
        i++
    }
}
let newVillage = myVillage();
console.log(newVillage.next())
console.log(newVillage.next())
console.log(newVillage.next())
console.log(newVillage.next())

function phoneBrands(values) {
    let i = 0;
    return {
        next: function () {
            if (i < values.length) {
                return {
                    values: values[i++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let phones = ['Samsung', 'Nokia', 'Infinix', 'iPhone'];
let newPhones = phoneBrands(phones);
console.log((newPhones.next()))
console.log((newPhones.next()))
console.log((newPhones.next()))
console.log((newPhones.next()))
console.log((newPhones.next()))

function* phone() {
    let y = 0;
    yield 'Samsung';
    yield 'Nokia';
    yield 'Infinix';
    yield 'iPhone';
}
let nePhone = phone();
console.log((nePhone.next()).value)

function* dPhones() {
    let y = 0;
    let newPhones = ['Samsung', 'Nokia', 'Infinix', 'iPhone']
    while (y <newPhones.length){
      yield  newPhones[y]
        y++
    }
    
}
let nePhones = dPhones();
console.log((nePhones.next()))
console.log((nePhones.next()))
console.log((nePhones.next()))
console.log((nePhones.next()))
console.log((nePhones.next()))

//creation of a map object
let firstMap = new Map()
{
    firstMap.set(1, 'Laptop')
    firstMap.set(2, 'Phones')
    firstMap.set(3, 'Chairs')

}
console.log(firstMap.get(2))
let objct = {};
let funtn = function () { };
let houses = new Map()
{
    houses.set(1, 'Bungalow')
    houses.set(objct, 'Duplex')
    houses.set(funtn, 'Upstairs')
}

console.log(houses.get(objct))
console.log(houses.get(funtn))

let roomItems = [[1, 'Refrigrator'], [2, 'Fan'], [3, 'Bed'], [4, 'Table']]
let nextMap = new Map(roomItems);
console.log(nextMap)

for (let [key, value] of nextMap) {
    console.log(key+" "+value)
}

let seamfixIntakes = new Map()
{
    seamfixIntakes.set (1, 'Chukwunonso Asadu', 'Project Manager')
    seamfixIntakes.set (2, 'Nonso Omagara', 'Database Aministrator')
    seamfixIntakes.set (3, 'Tochukwu Emeasoba', 'Software Developer')
}

console.log(seamfixIntakes)

for (let [key, value] of seamfixIntakes) {
    console.log(key+ ' '+value)
}

const map1 = new Map([
    ['country', 'Chile'],
    ['age', 30],
  ]);
  
  // 👇️ Using forEach
map1.forEach((value, key) =>{
    console.log(value, key);
});

let map2 = new Map()
{
    map2.set('Chile', 'Country')
    map2.set('age', 30)
}

for (let [key, value] of map2) {
    console.log(key+" "+value)
}

function countryNames(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                return {
                    value: values[index++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let newCountries = ['Nigeria', 'Canada', 'Ghana', 'Togo'];
let country1 = countryNames(newCountries);

function* countryFunc() {
    yield 'Nigeria',
    yield 'Canada',
    yield 'Ghana',
    yield 'Togo'
}
let country2 = countryFunc();
// console.log(country2.next())
// console.log(country2.next())
// console.log(country2.next())
// console.log(country2.next())
// console.log(country2.next())

function* countryFunc1() {
    let x = 0;
    let country2 = ['Liberia', 'Uganda', 'Sudan', 'UK']
    
    while (x <country2.length){
        yield country2[x]
        x++
    }
}
let country3 = countryFunc1()
console.log(country3.next())
console.log(country3.next())
console.log(country3.next())
console.log(country3.next())
console.log(country3.next())

let mySet = [1, 3, 2, 4, 6, 3, 5, 5, 7, 9]

let newSet = new Set(mySet);
console.log(newSet)