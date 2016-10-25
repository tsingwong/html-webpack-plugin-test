var partial = require('./partial.html')
var universial = require('./universial.js')

module.exports = function (templateParams) {
    var html = '<html><head>' +
        '<title>' + templateParams.htmlWebpackPlugin.options.title + '</title>' +
        '</head><body>' + universial() + ' - ' + partial + '</body></html>'


    return html
}
