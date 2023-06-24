
// synchronous methods
const {readFileSync,writeFileSync, write} =require('fs');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second)
writeFileSync('./content/writingfile.txt',`hello this is first ${first} and second ${second}`)