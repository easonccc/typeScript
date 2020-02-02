// ts推荐使用let/const 代替var来声明变量
// 1. 变量声明提升 多次重复声明一个变量
function f(flag: boolean): any {
  var x: number;
  if (flag) {
    x = 10;
  }
  return x;
}
console.log(f(true)); /* 10 */
console.log(f(false)); /* undefined */

function f1(flag: boolean): any {
  let x: number;
  if (flag) {
    let x: number = 2;
  }
  return x;
}
console.log(f1(true)); /* undefined */
console.log(f1(false)); /* undefined */

// 2.for循环作用域问题
/* for (var i: number = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
} */
// 打印结果为55555
// 最后的结果不是我们希望的 01234，而是5个5，这是因为我们传给setTimeout的每一个函数表达式实际上都引用了相同作用域里(var声明的变量只有函数作用域和全局作用域，)的同一个i； 在循环结束后，i的值为5。 所以当函数被调用的时候，它会打印出5个5

// 我们可以利用IIFE立即自执行函数表达式，创造多个函数作用域出来，为获取到的变量创建了一个新的变量环境
/* for (var a: number = 0; a < 7; a++) {
  (function(a) {
    setTimeout(function() {
      console.log(a);
    }, a * 100);
  })(a);
} */
// 0 1 2 3 4 5 6

// 当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对 每迭代都会创建这样一个新作用域，这就是我们在使用立即执行函数表达式时做的事
/* for (let i: number = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
} */
// 0 1 2 3 4

// 3. const声明变量
let n1: number = 1;
n1 = 2;
console.log(n1); /* 2 */

/* const n2: number = 1;
n2 = 3;
console.log(n2);  直接报错 不会生成相应的js文件 */

// 当用const定义一个对象时 直接赋值的方式同样不能重新赋值
// 但是对于复杂数据类型
// 不能通过下面的方式直接修改 因为相当于给变量b重新开辟了一个内存空间 地址发生了改变，constant类型的值不能修改
/* const obj1: any = {
  name: '阿杨'
};
obj1 = {
  name: '加油！'
};
console.log(obj1); */

// 这种方式可以更改 因为改变的是复杂数据类型的值，它们都存储在堆里面，只是一个引用，它们的值就是地址还是保存在栈里面，没有更改
const obj2: any = {
  name: 'ayag'
};
obj2.name = '嘻嘻';
console.log(obj2);

// 选择let还是const
/* 
1.所有变量除了计划去修改的都应该使用const 使用const也可以让我们更容易的推测数据的流动
2.基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么需要对这些变量重新赋值
*/
