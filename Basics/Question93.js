var arr=[1, 2, 3, 18, 9]
var output=0
for(var i=0;i<arr.length;i++)
{
    for(var j=i;j<arr.length;j++)
    {
        if(Math.abs(arr[i]-arr[j])>output)
        {
            output=Math.abs(arr[i]-arr[j])
        }
    }
}
console.log(output)