require('./main.css')
var template = require('./time.jade')

setInterval(function () {
    var div = document.getElementById('main')
    div.innerHTML = template({time: new Date() })
    div.style.color = 'navy'
}, 1000)
