var answer=(originalString)=>{
    var firstLetter=originalString[0]
    var lastLetter=originalString[originalString.length-1]
    var newString=lastLetter+originalString.substring(1,originalString.length-2)+firstLetter
    return newString
}
var originalString="hellowrld"
console.log(answer(originalString))