var R = require('./rubiks')
var r = new R()
r.move('D x')
console.log(r.toNet())
console.log(r.checkUpCross())
console.log(r.toNet())