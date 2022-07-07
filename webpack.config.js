const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

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
    plugins: [htmlPlugin],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    outputPath: 'image',
                    esModule: false
                }
            },
            type: 'javascript/auto'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, ]
    }

}