var a=2;
var b='2';
//比较时，字符串被转成数字
if(a==b){
	console.log("相等")
}else{
console.log("不相等")
}
//比较数值的同时，比较数据类型
if(a===b){
	console.log("相等")
}else{
console.log("===不相等")
}
//不等于0的数字都是true
var bo = false
if(bo==0){
	console.log("相等")
}else{
console.log("不相等")
}