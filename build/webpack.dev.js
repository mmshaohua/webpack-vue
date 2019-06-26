// 存放 dev 配置

const merge = require('webpack-merge')
const common = require('./webpack.base')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        contentBase: '../dist',
        port: 8080,
        open: true,
        stats: 'errors-only'
    },
    
    resolve: {  // 配置别名
        alias: {
            '@': path.join(__dirname, './src'),
        }
    }
})

