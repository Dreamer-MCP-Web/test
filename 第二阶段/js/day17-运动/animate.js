function getStyle(obj,attr)//获取样式
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
			value=Math.round(value*100);
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
function move(obj,attr,target,span)//定时器运动   缓冲运动
{
	clearInterval(obj.timer);
	if(!span)
	{
		span=10;
	}
	obj.timer=setInterval(function(){
		var icur=getStyle(obj,attr);
		var step=(target-icur)/10;
		step=step>0?Math.ceil(step):Math.floor(step);
		if(icur!=target)
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
		}
	},span)
	
}
function move2(obj,attr,target,span,step)//定时器运动   匀速运动
{
	clearInterval(obj.timer);
	if(!span)
	{
		span=10;
	}
	obj.timer=setInterval(function(){
		var icur=getStyle(obj,attr);		
		if(icur!=target)
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
		}
	},span)	
}
function move3(obj,attr,target,span,fn)//定时器运动   缓冲运动
{
	clearInterval(obj.timer);
	if(!span)
	{
		span=10;
	}
	obj.timer=setInterval(function(){
		var icur=getStyle(obj,attr);
		var step=(target-icur)/10;
		step=step>0?Math.ceil(step):Math.floor(step);
		if(icur!=target)
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
			}								}
	},span)
	
}
function move4(obj,json,span,fn)
{
	clearInterval(obj.timer);
	if(!span)
	{
		span=10;
	}
	var flag;
	obj.timer=setInterval(function()
	{
		flag=true;
		for(var attr in json)
		{
			var target=json[attr]; //获取json中的目标值
			var icur=getStyle(obj,attr);
			var step=(target-icur)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			if(icur!=target)
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