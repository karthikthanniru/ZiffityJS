var originalString = "hell world  kssm";
var modifiedString = originalString.split('').sort().join('');

console.log(modifiedString);

// var asciiNumbers=[]
// var index=0;
// for(var i=0;i<originalString.length;i++)
// {
//     var result=originalString.charCodeAt(i)
//     asciiNumbers[index++]=result
// }
// var sortedArray=asciiNumbers.sort()
// var modifiedString=