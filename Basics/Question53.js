var originalString="javacbrick"
var stringState="false"
for(var i=0;i<originalString.length;i++)
{
    if(originalString[i]=='a')
    {
        if(originalString[i+4]=='b')
        {
            stringState="true"
        }
    }
    if(originalString[i]=='b')
    {
        if(originalString[i+4]=='a')
        {
            stringState="true"
        }
    }
}
console.log(stringState)