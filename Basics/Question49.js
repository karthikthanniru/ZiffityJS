var originalString="helloworld"
var modifiedString=""
for(var i=0;i<originalString.length;i++)
{ 
    var result=originalString.charCodeAt(i)+1
    modifiedString=modifiedString+String.fromCharCode(result)
}
console.log(modifiedString)