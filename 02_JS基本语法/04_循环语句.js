// 1. while循环

// 2. for循环；类似与Java中

// 3. do...while循环

// 4. break 和 continue

// 5. 标签
/*
    JS语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置
*/
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0

// 标签也可以用于跳出代码块
foo: {
    console.log(1);
    break foo;
    console.log('本行不会输出');
  }
  console.log(2);
// 1
// 2