require('./main.css')

var universial = require('./universial.js')
var h1 = document.createElement('h1')
h1.innerHTML = universial();

document.body.appendChild(h1)
