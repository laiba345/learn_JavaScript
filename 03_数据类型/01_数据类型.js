/**
 *  数据类型：number、string、boolean、undefined、null、object
 *  对象是复杂的数据类型：狭义的对象、数组（array）、函数（function）
 * 
 */

/**
 *  判断某个值的类型
 *  1. typeof运算符; 无法区分数组和对象
 *  2. instanceof 运算符; 可以区分数组和对象
 *  3. Object.prototype.toString方法
 */

// console.log(typeof undefined); // 'undefined'
// console.log(typeof {}); // 'object'
// console.log(typeof []); // 'object'

var a = {}
var b = []
console.log(a instanceof Array) // false
console.log(b instanceof Array) // true

// 注意：null的类型是object，是历史原因造成的，95年的js第一版只设计了5中基本类型


