// 存放 dev 和 prod 通用配置

const webapack =require('webpack')
const path =require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js', // 入口
    module: {
        rules: [
            {   // 处理 .vue 文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {   // 处理 .js 文件
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env'
                        ]
                    }
                }
            },
            {   // 处理 .css/scss 文件
                test: /\.(sa|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {  // 处理 .jpg|png|gif 文件
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048, // 2M 以下的文件转换
                            name: "[name][hash].[exit]",
                            outputPath: './img'
                        }
                    }
                ]
            },
             { // 处理 .(eot|svg|ttf|woff|woff2 文件
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name][path].[ext]',
                        outputPath: './iconfont'
                    }
                }
            }
        ]
    },
    plugins: [
        // 解决vender后面的hash每次都改变
        new webapack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}