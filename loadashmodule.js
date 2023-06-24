const b = require('lodash');
const a = [1,[2,[3,[4,[5]]]]]
const newa = b.flattenDeep(a)
console.log(newa)