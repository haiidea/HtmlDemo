//当前页面加载完成
window.onload=function(){
	function fn2(a){
	console.log(a)
	}
	fn1();//调用函数，可以写在函数上面
	
	fn2(10);
	var click = document.getElementById("login")
		click.onclick=function(){
			console.log("登录了")
		}
}
function fn1(){//定义函数
	console.log("login")
}

function fn2(a){
	console.log(a)
	}
var arr=new Array(1,3,"d")
arr[10]="a"
for(var i=0;i<arr.length;i++){
	console.log(arr[i])
}
var reg=new RegExp("^1[^012][0-9]{9}$")
var tel="18101230498"
var res=reg.test(tel)
console.log(res)
