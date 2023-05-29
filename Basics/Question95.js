var arr=[1,2,3,4,5,5,6,6,3,2,2,7,8,9]
var replaceNumber=3
var replacePlace=2
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==replacePlace)
    {
        arr[i]=replaceNumber
    }
}
console.log(arr)