const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

const pathsToClean = [
    'public'
];

var config = {
    entry: APP_DIR + '/components/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.json']
    },
    module : {
        rules : [
            //js rules
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            //css rules
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader", // translates CSS into CommonJS
                                options: { minimize: true }
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: './src/favicon.ico'
        }),
        new ExtractTextPlugin({filename: 'styles.[chunkhash].css', allChunks: true}),
        new UglifyJsPlugin({
            parallel: true
        })
    ]
};

module.exports = config;