const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        // publicPath: '../dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
}