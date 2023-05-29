var arr=["kjRTHONDS",'DSCSSDSD','SDSDFSDF','DSFSDFSFSFSF']
var len=0
var index=0
for(var i=0;i<arr.length;i++)
{
    if(arr[i].length>len)
    {
        len=arr[i].length
        index=i

    }
}
console.log(arr[index])