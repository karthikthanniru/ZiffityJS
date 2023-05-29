var inputNumber=20 
var inputNumberTwo=40
if(inputNumber>=0 && inputNumberTwo>=0)
{
if((inputNumber%7==0 || inputNumberTwo%7==0)||(inputNumber%11==0 ||inputNumberTwo%11==0))
{
console.log("true")
}
else
{
    console.log("false")
}
}
else{
    console.log("false")
}