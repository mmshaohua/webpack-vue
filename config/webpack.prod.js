// 存放生产环境配置

const common = require('./webpack.base')
const merge = require('webpack-merge')  // 合并配置文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    
    plugins: [
        new CleanWebpackPlugin(),
    ]
})
