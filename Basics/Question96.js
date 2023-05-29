var arr=[1,2,5,4,3,6,4,8,5,6,5]
var sum=arr[0]
for(var i=1;i<arr.length;i++)
{
sum=sum+Math.abs(arr[i]-arr[i-1])
}
console.log(sum)