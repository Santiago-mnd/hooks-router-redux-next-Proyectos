// const chanchos = require('./importexport');

// console.log(chanchos);
// Esta es la manera antigua. ^^^^

import chanchos, { chanchosTristes, otrosChanchos, fn1, fn2 } from './importexport.mjs';
console.log(chanchos);
console.log(chanchosTristes);
console.log(otrosChanchos);
fn1();
fn2();

// Cuando no estemos trabajando con un package.json, debemos utilizar la extensión .msj, para poder utilizar importacione y exportaciones, sin problemas. 