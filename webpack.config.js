var path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { isDataView } = require('util/types');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        game:'./js/game.js',
        post:'./js/post.js',
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
            },
            {
                test: /\.(png|jpg|svg|gid)$/,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
        ]
    }
};