const util = require('util');
 
const today = new Date();
const earthDay = 'April 22, 2022';


console.log(today);
console.log(earthDay);

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));
