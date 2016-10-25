var partial = require('./partial.html')
var universial = require('./universial.js')

module.exports = universial() + new Date().toISOString() + partial
