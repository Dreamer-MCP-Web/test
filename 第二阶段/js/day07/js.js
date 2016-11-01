// JavaScript Document
function isRun(date)//判断闰年
{
	var year=date.getFullYear();
	if((year%4==0&&year%100!=0)||year%400==0)
	{
		return true;
	}
	else return false;
	
}
function geshi(date)//格式化输出日期
{
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hour=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	var str;
	str=year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;
	return str;
}
function days(date)
{	
	var year=date.getFullYear();//获取年月日
	var month=date.getMonth()+1;
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
	{
		return 31;
	}
	if(month==4||month==6||month==9||month==11)
	{
		return 30;
	}
	if(month==2)
	{
		if(isRun(date)==true)
		{
			return 29
		}
		else return 28;
	}	
}