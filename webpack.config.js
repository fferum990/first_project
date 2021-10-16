var path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        game:'./js/game.js',
        post:'./js/post.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundler.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html', 
            }),
            new CleanWebpackPlugin({

            }),
    ],
    module: {
        rules:[
            {
            test: /\.css$/,
            use: ['style-loader','css-loader']
            }
        ]
    }
};