/*
 * 1.数字类型： 二进制，八进制，十进制，十六进制
 *   ts里面表示双精度64位浮点值，可以用来表示整数和分数
 */
var hh = 11;
var oo = 666;
var hex = 0xff00;
console.log(hh, oo, hex);
/*
 * 2.字符串
 */
var str1 = 'red';
var str2 = '\u6A21\u677F\u5B57\u7B26\u4E32' + str1;
console.log(str1, str2);
/* 3.布尔类型 */
var isDone = true;
/* 使用new Boolean()  返回的不是一个布尔值，而是一个Boolean对象 */
/* let bool: boolean = new Boolean(1); 这里的类型必须大写如bool1所示 */
var bool1 = new Boolean(1);
/* 打印结果为[Boolean: true] */
console.log(isDone, bool1);
/* 4.null和undefined */
/*
  值相等，都是空值，但是类型不一样；是任意类型的子类型
  null： 在栈中的变量没有指向堆中的内存地址，作用是可以用来释放一个对象
*/
console.log(undefined == null); /* true */
console.log(undefined === null); /* false */
var num1 = null;
console.log(num1); /* null */
/* 5.void类型
  表示没有任何类型，一般用在没有返回值的函数上面 */
function fn() {
  console.log('一个没有return的函数');
}
fn();
/* 6.enum 枚举类型
  可以为一组没有意义的数值赋予友好的名字
  默认从零开始，也可以手动设置 */
var Pes;
(function(Pes) {
  Pes[(Pes['one'] = 0)] = 'one';
  Pes[(Pes['two'] = 3)] = 'two';
  Pes[(Pes['three'] = 4)] = 'three';
})(Pes || (Pes = {}));
var p0 = Pes.one;
var p2 = Pes.two;
var p1 = Pes.three;
console.log(p0, p2, p1); /* 0 3 4 */
/* 7.数组和元组 */
/* 7.0 数组 ·
  1.数组表示一组相同类型的值的集合，数组的项中不允许出现其他的类型；(特例，使用any类型可以放任意类型的组合)
  数组定义的三种方式  */
/* 2.类型+中括号
  例如number[]，这种类型的数组里面是不允许有除了number之外的类型 */
var list1;
list1 = [1, 2, 3];
/* 3.数组泛型Array+<类型> 例如Array<number> */
var list = [1, 2, 3];
/* 4.接口表示数组，利用索引签名 */
/* 7.1元组
  1.元组是为了合并不同类型的对象，而元组Tuple合并了不同类型的对象 */
var listx = [1, 'hh'];
/* 8.Any类型
  1.any类型是十分有用的，它允许你在编译时可以选择地包含或移除类型检查
  2.有时想在编程阶段还不清楚类型的变量指定一个类型，例如用户输入或者ajax或者第三方库；这种情况下，我们不希望类型检查器对这些值进行检查而是直接让他们通过编阶段的检查。这时就可以使用any类型标记这些变量。
  3.使用场景，当我们需要把公司现有的JavaScript项目迁移到typescript上面来的时候，就可以给变量声明any类型，后面再逐个的去优化，能让我们的老项目迅速切换typescript。 */
var notSure = 4;
notSure = 'maybe a string';
notSure = false;
/* 9.Object类型
  object类型的变量只是允许你给它赋任意值，但是却不能够在它上面调用任意方法，即使他真的有这些方法 */
var ob = 7.77;
console.log(ob); /* 7.77 */
console.log(typeof ob); /* number */
/* NumberObject.toFixed(num) 把number四舍五入为指定小数位数的数字 */
// ob.toFixed(1);
ob.toString();
console.log(ob); /* 没有转换成功 还是number类型 */
