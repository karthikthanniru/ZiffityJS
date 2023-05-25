//first type
var answer=(stringOne)=>{
var subString=stringOne.substring(stringOne.length,stringOne.length-3)
var answer2=subString.concat(stringOne)
return answer2.concat(subString)

}
var stringOne="ramam"
console.log(answer(stringOne))
//second type
