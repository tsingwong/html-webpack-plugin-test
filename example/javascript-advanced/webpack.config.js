var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var WebpackMajorVersion = require('webpack/package.json').version.split('.')[0]

module.exports = {
    entry: './example.js',
    output: {
        path: path.join(__dirname, 'dist/webpack-' + WebpackMajorVersion),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.png$/, loader: 'file-loader'},
            {test: /\.html$/, loader: 'html-loader'}
        ]
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            title: '112312312',
            template: 'template.js'
        }),
        new ExtractTextPlugin('style.css')
    ]
}
