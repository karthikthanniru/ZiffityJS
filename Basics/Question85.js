var arr=[1,2,3,4,5,6,7,8]
var firstArray=[]
var secondArray=[]
var output=[]
for(var i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        secondArray.push(arr[i])
    }
    else
    {
        firstArray.push(arr[i])
    }
}
var sum=0
var sum1=0
for(var i=0,j=0;i<firstArray.length && j<secondArray.length;i++,j++)
{
   sum=sum+firstArray[i]
   sum1=sum1+secondArray[i] 
}
output.push(sum)
output.push(sum1)
console.log(output)