// 存放生产环境配置
const path = require('path')

// 合并配置文件
const merge = require('webpack-merge')
const common = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    module: {},
    plugins: [],
    mode: 'production',
    output: {
        //contenthash 若文件内容无变化，则contenthash 名称不变
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ]

})
