var arr=[2,4,5,3,6,0,8,9,7]
var output=0
for(var i=0;i<arr.length;i++)
{
    if(Math.abs(arr[i]-arr[i+1])>output)
    {
        output=Math.abs(arr[i]-arr[i+1])
    }
}
console.log(output)