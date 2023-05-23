var a=[1,2,3,4,5,3,6,8]
for(var i=0;i<a.length;i++)
{
    for(var j=0;j<a.length;j++)
    {
        if(a[i]<a[j])
        {
            var temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
var Max=a.length-1;
var Min=0;
console.log("The maximum difference is "+(a[Max]-a[Min]));