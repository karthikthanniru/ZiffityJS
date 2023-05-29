var fileName = "helloworld.py";
var answer = "";

for (var index in fileName) {
  if (fileName[index] === '.') {
    answer = fileName.slice(Number(index) + 1);
    break;
  }
}

console.log(answer);
