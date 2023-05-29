var originalString = "javascript is amazing";
var words = originalString.split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var modifiedString = words.join(" ");
console.log(words)
console.log(modifiedString);
