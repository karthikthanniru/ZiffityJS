var stringOne="javaScript"
var answer=(stringOne)=>{
var lastLetter=stringOne.substring(stringOne.length-1)
 return (lastLetter.concat(stringOne)).concat(lastLetter)

}
console.log(answer(stringOne))