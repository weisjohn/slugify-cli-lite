#!/usr/bin/env node
'use strict';

const slugify = require('slugify');
const ret = i => console.log(slugify(i, { lower: true }));

// handle arguments
const args = process.argv.slice(2);
let input = args.join('-');
if (input.length) return ret(input);

// support data from stdin
if (process.stdin.isTTY) return;
var data = "";
process.stdin.setEncoding('utf8').on('data', (chunk) => {
  data += chunk;
}).on('end', () => {
  data = data.split('\n').filter(n => !!n).forEach(ret);
}).resume();