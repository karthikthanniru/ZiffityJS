var originalString="pmtpmtpmt"
    var Pscount=0;
    var Tscount=0;
for(var index=0;index<originalString.length;index++)
{
    if(originalString[index]=='p')
    {
        Pscount++;
    }
    if(originalString[index]=='t')
    {
        Tscount++;
    }
    
}

if(Pscount==Tscount)
{
    console.log("true")
}
else{
    console.log("False")
}


