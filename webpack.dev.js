const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    entry: {
        app: './src/scripts/app.js'
    },
    devServer:{
        port: 8080,
        host: '0.0.0.0',
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filetype: 'pug',
            filename: 'index.html',
            template: "./src/pug/index.pug",
            hash: true,
            chunks: ['app']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            },
            {
                test: /\.mp4$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'vids'
                    }
                }
            }
            ,
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