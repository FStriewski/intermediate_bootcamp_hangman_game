function wrongGuessCount(word, guesses) {
//'hello', ['e', 'd', 'x', 'o']

  var wrongCharacters = guesses.filter( guess => word.indexOf(guess) === -1)
  var count = wrongCharacters.length
  console.log("Wrong attempts: " + count + "/6")
  return count
  }

//console.log("test show guess 1:", wrongGuessCount("hello", ["x","w","w","h","w","g","q"]))

function showGuess(word, guesses) {
// ['h', 'e', 'l', 'l', 'o']     ['e', 'd', 'x', 'o']
  var wordArray = word.split("")

  var puzzleWord = wordArray.map(x => guesses.indexOf(x) < 0 ? "_" : x);

  console.log(puzzleWord.join(""))
  return puzzleWord.join("")
}

//console.log("test show guess 1:", showGuess("hello", ["x","o","e","h"]))



  function isWinner(word, guesses) {
      if (showGuess(word,guesses) === word) return true
      return false
  }




  // to read from the console
  const readline = require('readline')
  const rl = readline.createInterface({input:process.stdin, output:process.stdout})

    function next(word, guesses){
      if (wrongGuessCount(word,guesses) >= 6){
        console.log(">> Sorry, but you have lost!")
        rl.close()
        process.stdin.destroy()
      }

      if (isWinner(word,guesses)){
          console.log(">> Congrats, you win!")
          rl.close()
          process.stdin.destroy()
        }

      rl.question('Next letter? ', answer => {
              var test = guesses.concat(answer.toLowerCase().split(""))
              console.log('player wrote:', test.join(","))
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
