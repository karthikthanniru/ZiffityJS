var numberOne=60
 function answer(numberOne)
 {
    if(Math.abs(numberOne-19)>19)
    {
        return 3*(Math.abs(numberOne-19))
    }
    else
    {
        return Math.abs(numberOne-19)
    }
 }
 console.log(answer(numberOne))