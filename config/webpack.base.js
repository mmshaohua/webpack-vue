// 存放 dev 和 prod 通用配置

const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 打包入口js文件
    entry: './src/main.js', 

    // 出口配置
    output: {
        // 若文件内容无变化，则 占位符 [name]_[hash] 不变
        filename: '[name].[hash].js',
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
    
    resolve: {  // 配置别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            '@api': path.resolve(__dirname, '../src/api'),
            '@common': path.resolve(__dirname, '../src/common'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@views': path.resolve(__dirname, '../src/views'),
        },

        // 省略文件拓展名
        extensions: ['.js', '.json', '.vue', '.scss', '.css']
    },
    
    plugins: [
        // 解决vender后面的hash每次都改变
        // new webapack.HashedModuleIdsPlugin()
        
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        
        new CopyWebpackPlugin([
            {
                from: './public'
            }
        ]),
        
        new VueLoaderPlugin(),
    ]
}