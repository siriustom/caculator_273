var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'file-loader',
            },
        ]
    },
};