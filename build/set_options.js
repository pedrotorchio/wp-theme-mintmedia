#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

var fileName = __dirname + '/options.json';
var options = require(fileName);

options.isProduction = argv.mode == 'PRODUCTION';

console.log('Setting options:');
console.log(JSON.stringify(options));

fs.writeFileSync(fileName, JSON.stringify(options, null, 2));