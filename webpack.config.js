var path = require ('path');

module.exports = {
    mode: 'development',
    entry: './src/js/game.js',
    devtool: "source-map",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    }
};