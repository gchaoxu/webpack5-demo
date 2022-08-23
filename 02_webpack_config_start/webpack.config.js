const path = require('path')

module.exports = {
  entry: './src/index.js', //可以是相对路径
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')  //输出位置要求是绝对路径
  }
}