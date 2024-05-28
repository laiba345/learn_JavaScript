// var a;
// console.log(a); // undefined

// var a, b;

// 变量提升：
// JS引擎的工作方式：先解析代码，获取所有被声明的变量，然后再一行行运行
// 结果：所有的变量声明语句都会被提升到代码的头部，即 变量提升
// console.log(a); // undefined 
// var a = 1; 

// 标识符

// 注释
/*
    多行注释
*/

// 区块
// 注意：对于var命令来说，JS区块不构成单独的作用于
{
    var a = 1;
}
console.log(1);