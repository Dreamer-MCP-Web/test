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
function move(obj,attr,target,span)
{
	clearInterval(obj.timer);
	if(!span)
	{
		span=10;
	}
	obj.timer=setInterval(function()
	{
		var icur=getStyle(obj,attr);
		var step=(target-icur)/10;
		step=step>0?Math.ceil(step):Math.floor(step);
		if(target!=icur)
		{
			if(attr=="opacity")
			{
				obj.style[attr]=(icur+step)*100;
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
