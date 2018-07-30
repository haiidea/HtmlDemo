//声明变量一律是var
//alert("hello")
var a=10
var s="string"
var u // 定义变量没有赋值，类型是undefined
var n =null // 类型是NULL
var b = 1.1 // js中的数据不区分整形还是浮点，都是NUMBER
// NAN一个特殊的NUMBER值，类型是Nan，不是数字的数字，
//所有与NAN元素的的结果都是NAN，不等于任何对象，包括它自己，
//因为10和a不能相乘
var b1 = 10*a 
//不区分单引号，双引号
var  s='',g=""
// tostring  只有NUMBER和boolean可以使用
//alert(typeof(u))

console.log(typeof(b1));//向控制台输出日志