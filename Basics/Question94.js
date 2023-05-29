var arr=[1,2,4,5,5,2,1,4,1,3,1,1,1,]
var countArray=[]

var value=0
for(var i=0;i<arr.length;i++)
{
    value=arr[i]
    var count=0
for(var j=0;j<arr.length;j++)
{
if(arr[j]==value)
{
    count++
}
}
countArray.push(count)
}
var maxValue=Math.max(...countArray)
for(var i=0;i<countArray.length;i++)
{
    if(countArray[i]==maxValue)
    {
        console.log(arr[i])
        break
    }
}