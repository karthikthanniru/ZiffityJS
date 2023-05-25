var date=new Date()
var weeklyDays=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log("Today is:"+weeklyDays[date.getDay()])
var hours=date.getHours()
console.log(typeof(hours))
var mins=date.getMinutes()
var Seconds=date.getSeconds()
if(hours>=12)
{
    console.log("Current time: "+(hours-12)+" PM"+": "+mins+": "+Seconds)
}
else
{
    console.log("Current time: "+hours+" AM"+": "+mins+": "+Seconds)
}