// My code

function anagramCounter (wordsArray) {
  let counter = 0;
  for(let i = 0; i < wordsArray.length; i++) {
    for(let j = i + 1; j < wordsArray.length; j++) {
      if(wordsArray[i].length === wordsArray[j].length){
        let a = wordsArray[i].split("");
        let b = wordsArray[j].split("");
        for (let k = 0; k < a.length; k++) {
          if(b.indexOf(a[k]) !== -1) {
            b.splice(b.indexOf(a[k]), 1);
          } 
        if(!b.length) {counter++}
        }
      }
    }
  }
  return counter;
}

//Best Practice

function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex+1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++
      }
    }
  })
  return numberOfAnagrams
}