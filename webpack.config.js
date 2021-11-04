const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 简单创建 HTML 文件，用于服务器访问

module.exports = {
    mode  : 'development',
    entry : './src/main.js',
    output: {
        path    : path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html'), filename: 'index.html' }),
    ],
    devServer: {
        watchFiles: ['src/**/*'],
        static    : {
            directory : path.join(__dirname, 'dist'),
            serveIndex: true,
        },
        compress          : true,
        port              : 9000,
        historyApiFallback: true,
    },
};