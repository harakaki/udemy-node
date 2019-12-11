const chalk = require('chalk');
const validator = require('validator');

const getNotes = require('./notes.js');
const msg = getNotes();

console.log(msg);

let email = 'adsf@asdf.com';
console.log(email + ' is an email? : ' + validator.isEmail(email));

let url = 'httz:((com.ao';
console.log(url + ' is an url? : ' + validator.isURL(url));

console.log(chalk.bgBlue.black.bold('lalala'));