var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackMajorVersion = require('webpack/package.json').version.split('.')[0]

module.exports = {
    entry: './example.js',
    output: {
        path: path.join(__dirname, 'dist/webpack-' + webpackMajorVersion),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.jade$/, loader: 'jade'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            cache: false,
            template: 'template.jade',
            filename: 'index.html',
            favicon: 'favicon.ico',
            title: 'Jade demo'
        }),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        contentBase: './dist/'
    }
}
