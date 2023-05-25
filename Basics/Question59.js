var answer = (originalString) => {
    return originalString.length % 2 === 0
      ? originalString.substring(0, Math.floor(originalString.length / 2)): originalString;
  };
  
  var originalString = "javascript";
  console.log(answer(originalString));
  