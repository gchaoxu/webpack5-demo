import { sum, square } from './js/utils.js'
const getInfo = require('./js/api.js')

import './js/login'

console.log(sum(10, 20))
console.log(square(10))
console.log(getInfo())


/**
 * 1 工程化： 
 * 2 兼容性： CSS JS 
 * 3 如何实现兼容：
 * 4 到底要兼容哪些平台
 *  caniuse.com 一个统计网站
 * 
 * >1%  // 市场占有率大于 1%
 * default 
 * dead  // 废弃，死掉（24个月没有维护）
 * last 2 version： //（最新的两个版本）
 */
