//first way
var answer=(stringOne)=>
{
return stringOne.length>4?(stringOne.substring(0,4)==="java"?"true":"false"):"false"
}
var stringOne="javaScript"
console.log(answer(stringOne))

var stringTwo="javaScript"
var answer1="false";
//second type
for(var i=0;i<stringTwo.length;i++)
{
    if(stringTwo[0]=='j' && stringTwo[1]=='a' && stringTwo[2]=='v' && stringTwo[3]=='a')
    {
        answer1="true"
        break
    }
}
console.log(answer1)
