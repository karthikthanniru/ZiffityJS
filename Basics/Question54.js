function countVowel(str) { 
    const count = str.match(/[aeiou]/gi).length;
 
    return count;
}

var string = "javascript"

var result = countVowel(string);

console.log(result);