const string = "hello there from lighthouse labs";

const appendChar = function(string, appendedString) {
  let returnedString = string + appendedString;
  return returnedString;
};

const multiplyFactor = function(factor){
  return function(number){
    return number * factor;
  };
};

const typeWriter = function(inputString){
  sentence = appendChar(inputString,'...\n');
  let timeFactor = multiplyFactor(50);
  for (let i = 0; i < sentence.length; i++){
    setTimeout(()=>process.stdout.write(sentence[i]), timeFactor(i * (i/10)));
  }
}

typeWriter(string);