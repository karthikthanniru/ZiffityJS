var originalString="hello world"
var modifiedString=""
for(var i=originalString.length-1;i>=0;i--)
{
    modifiedString=modifiedString+originalString[i]
}
console.log(modifiedString)
