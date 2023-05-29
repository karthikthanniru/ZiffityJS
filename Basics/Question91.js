var arr = [1, 2, 4, 5, 7, 3, 7, 3, 8, 9];
var k = 3;
var output = 0;

for (var i = 0; i < arr.length; i++) {
  if (i + k < arr.length && arr[i] + arr[i + k] > output) {
    output = arr[i] + arr[i + k];
  }
}

console.log(output);
