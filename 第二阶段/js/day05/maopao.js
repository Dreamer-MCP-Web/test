// JavaScript Document
function asc(a)
{
for(i=0;i<a.length-1;i++)
{
	for(j=0;j<a.length-1-i;j++)
	if(a[j]>a[j+1])
	{
		var t=a[j];
		a[j]=a[j+1];
		a[j+1]=t;
	}
}
document.write(a+"<br/>")

}