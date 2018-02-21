function wrongGuessCount(word, guesses) {
//'hello', ['e', 'd', 'x', 'o']

  var wrongCharacters = guesses.filter( guess => word.indexOf(guess) === -1)
  var count = wrongCharacters.length
  return count
  }
/*
Wouter 1 with reduce:
return guesses
  .reduce(sum,guess) => (
    sum + word.indexOf(guess) === -1 ? 1 :0
  ) ,0)     // initial Value

 // if reduce "{}"" then needs to "return"


*/

//console.log("test show guess 1:", wrongGuessCount("hello", ["x","w","w","h","w","g","q"]))

function showGuess(word, guesses) {
// ['h', 'e', 'l', 'l', 'o']     ['e', 'd', 'x', 'o']
  var wordArray = word.split("")

  var puzzleWord = wordArray.map(x => guesses.indexOf(x) < 0 ? "_" : x);
//includes instead of indexOf
  return puzzleWord.join("")
}

//console.log("test show guess 1:", showGuess("hello", ["x","o","e","h"]))


/*Step 2 - Wouter:
  function showGuess(word, guesses) {
    return word
      .split ('')
      .map(char => {
        if (guesses.includes(char)){
        return char
      }
      return "_"
    })
}


console.log(showGuess('hello', ['e', 'd', 'x', 'o']))

*/
//Step 3 - me:
  function isWinner(word, guesses) {
      if (showGuess(word,guesses) === word) return true
      return false
  }


/*
Step 3 - Wouter:
  function isWinner(word, guesses) {
      return word.split("").join(" ") === showGuess(word,guesses)
  }

*/

  // to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

  function next(word, guesses){
    if (wrongGuessCount(word,guesses) > 6){
      console.log(">> Sorry, but you have lost!")
      rl.close()
      process.stdin.destroy()
    }

    if (isWinner(word,guesses)){
        console.log(">> Congrats, you win!")
        rl.close()
        process.stdin.destroy()
      }

    rl.question('next letter? ', answer => {
            console.log('player wrote:', answer)
            var test = guesses.concat(answer.split(""))
            return next(word,test)
    })
}

function generateWord(){
  var sentence = "depiction of a large writhing naked woman, whose prominent pudendum would be only more evident when viewed from below saw him accused of pornography and the public prosecutor was called Although the ministry stood by him when Jurisprudence which featured a penitent encircled by a formless squidlike creature caused further disquiet a decision was made to permanently display the paintings in a gallery"

  wordList = sentence
    .split(" ")
    .filter(x => x.length > 5)

  var randomIndex = Math.floor(Math.random()* wordList.length)
  return wordList[randomIndex]
  }


//console.log(generateWord())

next(generateWord(), [])
