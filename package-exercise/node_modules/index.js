var chalk = require("chalk");

var message1 = chalk.bgGreen("Hello") + ' ' + chalk.yellow.bold.underline("World");
var message2 = chalk.cyan.strikethrough('keano') + ' ' + chalk.dim.magenta('voelkl');
console.log(message1);
console.log(message2);