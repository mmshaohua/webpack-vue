// 存放生产环境配置

const merge = require('webpack-merge')  // 合并配置文件
const common = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    
    plugins: [
        new CleanWebpackPlugin(),
    ]
})
