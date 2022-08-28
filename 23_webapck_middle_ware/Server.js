const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')

const app = express()

// 获取配置文件
const config = require('./webpack.config.js')
// 配置文件传递给 webpack 去打包并返回打包之后的结果
const compiler = webpack(config)
// 打包之后的结果传递给中间件
app.use(webpackDevMiddleware(compiler))

// 开启端口上的服务监听
app.listen(3000, () => {
  console.log('服务运行在 3000端口上')
})