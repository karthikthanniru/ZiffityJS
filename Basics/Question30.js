
var stringOne = "javaScript is big";
var answer = (stringOne) => {
  return stringOne.substring(4, 10) === "Script" ? stringOne.slice(0, 4) + stringOne.slice(10) : stringOne;
}

console.log(answer(stringOne));
