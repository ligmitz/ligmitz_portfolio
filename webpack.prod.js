const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const Terser = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: {
        app: './src/scripts/app.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].[chunkhash].bundle.js' 
    },
    optimization: {
        minimizer: [new OptimizeCssPlugin(),new Terser()]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
        new HtmlWebpackPlugin({
            filetype: 'pug',
            filename: 'index.html',
            template: './src/pug/index.pug',
            chunks: 'app',
            minify:{
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }

        ]
    }

    
}