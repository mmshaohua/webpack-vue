// 存放 dev 配置
const merge = require('webpack-merge')
const common = require('./webpack.base')
const path = require('path')

module.exports = merge(common, {
    devServer: {
        contentBase: '../dist'
    },
    output: { // 输出
        // 每次保存 hash 都变化
        filename: 'js/[name].[hash].js',
        path: path.resolve( __dirname, '../dist')
    },
    module: {},
    mode: 'development',
    resolve: {  // 配置别名
        alias: {
            '@': path.join(__dirname, 'src')
        }
    }
})

