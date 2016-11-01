function setCookie(name,value,n)
		{
			//获取系统当前时间
			var d=new Date();
			//把当前时间加上一个天数
			d.setDate(d.getDate()+n);
			//设置cookie的样式
			document.cookie=name+"="+value+";expires="+d+";path=/";
			console.log("ddddd");
		}
		function getCookie(name)
		{
			var arr=document.cookie.split("; ");
			for(var i=0;i<arr.length;i++)
			{
				var newarr=arr[i].split("=");
				if(newarr[0]==name)
				{
					return decodeURI(newarr[1]);
				}
			}	
			
		}
		function removeCookie(name)
		{
			setCookie(name,"",-1);
		}
