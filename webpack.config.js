/**
 * Created by artemkopytko on 05.09.17.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'sass-loader' ],
                    publicPath: '/dist'
            })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bootstrap Project',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html' // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        })
    ]
}