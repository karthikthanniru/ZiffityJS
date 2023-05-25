var answer=(originalString)=>{
var subString=originalString.substring(originalString.length-1,originalString.length-4)
return subString+subString+subString+subString
}
var originalString="javascript"
console.log(answer(originalString))