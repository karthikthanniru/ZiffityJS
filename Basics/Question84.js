var originalString="raju"
var output=""
for(var i=0;i<originalString.length;i++)
{
var random=originalString.charCodeAt(i)
output=output+String.fromCharCode(random+1)
}
console.log(output)