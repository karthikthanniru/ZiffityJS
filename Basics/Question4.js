var oneSide=5
var twoSide=6
var thirdSide=7
var semiPerimeter=(oneSide+twoSide+thirdSide)/2
var area=Math.sqrt((semiPerimeter*(semiPerimeter-oneSide)*(semiPerimeter-twoSide)*(semiPerimeter-thirdSide)))
console.log(area)