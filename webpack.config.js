const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    const isProd = env === 'production';
    return {
        entry: ['@babel/polyfill', './src/scripts/index.js'],
        output: {
            path: path.resolve(__dirname, 'public/dist'),
            filename: 'bundle.js'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        // url: false
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }, {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            publicPath: '/dist/',
            watchContentBase: true,
            historyApiFallback: true
        },
        devtool: isProd ? 'source-map' : 'inline-source-map'
    }
}
