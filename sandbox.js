// let is we want to change the variable between line of codes
/* let age = 25;
let year = 2019;

console.log(age, year);
age = 30;

console.log(age, year);
year = 2018;
console.log(age, year); 
 */
//Data types
//STRINGS ------------------------
console.log("hello");

let firstName = "aidan";
let lastName = "bouzekri";

let fullName = firstName + " " + lastName;

console.log(fullName);

//geting certain characther
console.log(firstName[0]);

// getting length
console.log(firstName.length);

// string methods
//upper case
console.log(firstName.toUpperCase());

//storing the result into another variable
let result = firstName.toLocaleLowerCase();
console.log(result, firstName);

//indexOf to find the index of a string

let index = firstName.indexOf("d");
console.log(index);

//COMON STRING METHODS
let email = "bouzekri@gmail.com";

//NUMBERS --------------------------------

//math operation -- + ,-,/,*,**,%

//order of operations -- B I D M A S --> () , ** , / , * , + , -

likes = 10;
likes++;
likes--;
likes += 10;
likes -= 2;
likes *= 2;
likes /= 10;
console.log(likes);

//NaN === Not a number

console.log(5 * "hi");

// template string way to concatenate multiple

const title = "heroes";
const author = "marios";
const like = 10;

let results = `the title is ${title} by ${author} has ${like} likes `;
console.log(results);

//Creating html template

let html = ` <h2>${title}</h2>
<p>by ${author}</p>
<span>has ${like} likes</span>`;

console.log(html);

// ARRAY

let array = ["a", "b", "c", "d"];

//console.log(array[0]);

//console.log(array.length);

// ARRAY METHOD

//let method = array.join(' * ');

//let method = array.indexOf('a');

//CONCATENATE TWO ARRAYS

//let method = array.concat(['d', 'f']);

let method = array.push("aida", "k");

console.log(array);

//NULL or UNDEFINED

let age = null;

console.log(age, age + 3, ` the age is ${age}`);

//BOOLEAN
//true / false

let emails = "aid@gmail";

//let resultts = email.includes('@'); // it will return true if the email contains th sign '@'

let names = ["aid", "djf", "jfjf"];
let resultts = names.includes("aida");
console.log(resultts);

// == to verify if the two comparators are the same and the result is a boolean
let ages = 10;

console.log(ages == 11);
console.log(ages == 10);
console.log(ages != 100); // NOT EQUAL TO
// other sign like > , < , <= , >= ---------------

// strict comparision '===' (diffrent types can't be equal)

console.log("aidoucha is here");

console.log(ages == 10); //true
console.log(ages == "10"); //true

// strict comparision '===' (diffrent types can't be equal)
console.log(ages === 10); // true
console.log(ages === "10"); // false

//TYPE CONVERSION ---------------

let score = "100";
console.log(score + 1); // >> 1001 (concatenation)
score = Number(score);
console.log(score + 1); // 101
console.log(typeof score); // number

//let res = Number('hello world');
//console.log(res); // NaN > not a number

//convert into string
let res = String(50);
console.log(res, typeof res); // 50 string

//convert into boolean
let ress = Boolean(1);
console.log(ress, typeof ress); // true 'boolean'
