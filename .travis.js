console.log(process.argv)
var fs = require('fs')
var info = fs.statSync('./dist.tar')
console.log(info)