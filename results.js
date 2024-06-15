const notes = require('./import.js');
console.log('server is available');

var age = notes.age;
var result = notes.addNumber(age + 18, 10);

console.log(age); // This will log the initial age from the module
console.log('result is now', result);