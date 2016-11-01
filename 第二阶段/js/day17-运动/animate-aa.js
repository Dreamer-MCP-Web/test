function getStyle(obj,attr)
{
	var value;
	if(obj.currentStyle)
	{
		value=obj.currentStyle[attr];
	}
	else
	{
		value=window.getComputedStyle(obj,false)[attr];
	}
	if(attr=="opacity")
	{
		value=Math.floor(value*100);
	}
	else
	{
		value=parseInt(value);
	}
	if(isNaN(value))
	{
		value=0;
	}
	return value;	
}
function move(obj,attr,targrt,span,fn)
{
	clearInterval(obj.timer);
	if(!span)  //如果没设置span；
	{
		span=10;
	}
	
	obj.timer=setInterval(function()
	{
		//获取当前属性
		var icur=getStyle(obj,attr);  //当前属性是在不断地变化，所以要在定时器内获取
		var step=(target-icur)/10;
		step=step>0?Math.ceil(step):Math.floor(step); //step>0，向上取整，否则向下取整
		if(targrt!=icur)
		{
			if(attr=="opacity")
			{
				obj.style[attr]=(icur+step)/100;
			}
			else
			{
				obj.style[attr]=icur+step+"px";
			}
		}
		else
		{
			clearInterval(obj.timer);
			if(fn)
			{
				fn();
			}
		}
	},span)
}
function move4(obj,json,fn,span)
{
	clearInterval(obj.timer);
	if(!sapn)
	{
		span=10;
	}
	var flag=false;
	obj.timer=setInterval(function()
	{
		flag=true;
		for(var attr in json)
		{
			var target=json[attr]; //获取json中的目标值
			var icur=getStyle(obj,attr);
			var step=(target-icur)/10;
			step=strp>0?Math.ceil(step):Math.floor(step);
			if(icur!target)
			{
				flag=false;
				if(attr=="opacity")
				{
					obj.style[attr]=(icur+step)/100;
				}
				else
				{
					obj.style[attr]=icur+step+"px";
				}
			}
		}
		if(flag) //循环结束之后，
		{
			clearInterval(obj.timer);
			if(fn)
			{
				fn();
			}
		}
	},span)
}
