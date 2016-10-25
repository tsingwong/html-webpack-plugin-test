var backend = typeof HTML_WEBPACK_PLUGIN !== 'undefind'

module.exports = function () {
    return 'Hello World Form ' + (backend ? 'backend' : 'frontend')
}
