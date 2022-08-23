const path = require('path')

// 这里使用的是 node 中的获取项目的绝对路径
const appDir = process.cwd()

const resolveApp = (relativePath) => {
  return path.resolve(appDir, relativePath)
}

module.exports = resolveApp
