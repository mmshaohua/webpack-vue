// 存放 dev 和 prod 通用配置

const path =require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // 打包入口js文件
    entry: './src/main.js', 

    // 出口配置
    output: {
        // 若文件内容无变化，则 占位符 [name]_[hash] 不变
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
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
            {   // 处理 .css/sass/scss 文件
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {  // 处理 .jpg|png|gif 文件
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048, // 2M 以下的文件转换 base64
                            name: "[name].[hash].[exit]",
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
                        name: '[name].[path].[ext]',
                        outputPath: './iconfont'
                    }
                }
            }
        ]
    },
    plugins: [
        // 解决vender后面的hash每次都改变
        // new webapack.HashedModuleIdsPlugin()
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new CopyWebpackPlugin([
            {
                from: './public'
            }
        ]),
    ]
}