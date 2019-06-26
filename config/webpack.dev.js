// 存放 dev 配置

const common = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true,
        stats: 'errors-only'
    },
    
})

