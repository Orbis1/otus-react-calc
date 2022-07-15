import { callback } from './calc';

const greet: string = `
Welcome to console-calc!
Type your expression (all numbers and operator must have " " as delimiter).
For exit press ctrl + C or type exit.
`
console.log(greet);

process.stdin.on('data', callback);