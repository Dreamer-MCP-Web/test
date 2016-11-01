function setCookie(name,value,n)//建立cookie 的函数
{
	var d=new Date();
	d.setDate(d.getDate()+n);//过期时间
	document.cookie=name+"="+value+";expires="+d;
}
function getCookie(name) //获得cookie值的函数
{
	var arr=document.cookie.split(" ,");//把cookie分割成数组
	for(var i=0;i<arr.length;i++)
	{
		var str=arr[i].split("=");//把 name和value的值分离出来
		if(str[0]==name)
		{
			return decodeURI(str[1]);
		}
	}
}
