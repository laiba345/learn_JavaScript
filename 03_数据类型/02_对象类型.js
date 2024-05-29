/**
 * 对象：简单说，对象就是一组“键值对”的集合，是一种无序的复合数据集合。
 * 
 */
var obj = {
    foo: 'hello',
    bar: 'world'
}
console.log(obj['foo']) // 形式1
console.log(obj.foo) // 形式2

obj.foo = 'hk'
obj['bar'] = 'kk'
console.log(obj['foo']) 
console.log(obj.bar)

// 属性的查看；使用Object.keys()方法
console.log(Object.keys(obj)); // [ 'foo', 'bar' ]
// 属性的删除：delete; 删除一个不存在的属性，不报错，返回true
delete obj.foo
console.log(Object.keys(obj)); 

// 注意：只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除
var obj2 = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
});

obj.p // 123
delete obj.p // false

// 注意2：delete命令只能删除对象本身的属性，无法删除继承的属性
var obj3 = {};
delete obj.toString // true； 返回true，但是没被删除，
obj.toString // function toString() { [native code] }

// 判断属性是否存在：in 运算符

// 属性的遍历：for ... in 循环
// 例如：使用for...in 用来遍历一个对象的全部属性
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}

// with语句
with (对象) {
    语句;
}

// 作用：操作同一个对象的多个属性时，提供一些书写的方便
// 例一
var obj = {
    p1: 1,
    p2: 2,
};
with (obj) {
    p1 = 4;
    p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
    console.log(href);
    console.log(title);
    console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);