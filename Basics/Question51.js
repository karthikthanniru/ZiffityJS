var answer=(randomNumber)=>{
var hours=Math.floor(randomNumber/60)
var min=randomNumber%60
return hours+":"+min
}
var randomNumber=450
console.log(answer(randomNumber))