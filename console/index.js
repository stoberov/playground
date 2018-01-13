const logSymbols = require('log-symbols');
const ora = require('ora');
const Cfonts = require('cfonts');

Cfonts.say('Console', {
    align: 'center',
    colors: ['red', 'yellow'],

});

// Colored symbols for various log levels
console.log(logSymbols.error, 'Error');
console.log(logSymbols.info, 'Info');
console.log(logSymbols.success, 'Success');
console.log(logSymbols.warning, 'Warning');

// Loader
const spinner = ora({
    text: 'Fetching data...'
});

spinner.start();

setTimeout(() => {
    spinner.succeed('Fetched!');
}, 2000);
