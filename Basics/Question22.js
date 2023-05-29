var stringOne="javaScript"
var indexNumber=6
var answer=(stringOne,indexNumber)=>{
var originalAnswer="";
for(indexs in stringOne)
{
    if(indexs!=indexNumber)
    {
        originalAnswer=originalAnswer+stringOne[indexs]
    }
}
return originalAnswer
}
console.log(answer(stringOne,indexNumber))