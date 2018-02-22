// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})



// (1) Count wrong guesses - return count:

function wrongGuessCount(word, guesses) {
  //'hello', ['e', 'd', 'x', 'o']
    let wrongCharacters = guesses.filter( guess => word.indexOf(guess) === -1)
    let count = wrongCharacters.length
    console.log("Wrong attempts: " + count + "/6")
    console.log(drawImage(count))
    return count
}



// (2) Replace _ with a correct guess. Return the word so far.

function showGuess(word, guesses) {
    // ['h', 'e', 'l', 'l', 'o']     ['e', 'd', 'x', 'o']
    let wordArray = word.split("")
    let puzzleWord = wordArray.map(x => guesses.indexOf(x) < 0 ? "_" : x);
    console.log(puzzleWord.join(""))

    return puzzleWord.join("")
}


//  (3) Check if the word has been guessed correctly

function isWinner(word, guesses) {
    if (showGuess(word,guesses) === word) return true

    return false
  }


// (4)Check if lost or won, fetch new input if not.

function next(word, guesses){
    if (wrongGuessCount(word,guesses) >= 6){
      console.log(`>> Sorry, but you have lost! The word was: ${word} `)
      rl.close()
      process.stdin.destroy()
    }

    if (isWinner(word,guesses)){
      console.log(">> Congrats, you win!")
      rl.close()
      process.stdin.destroy()
    }

    rl.question('Next letter? ', answer => {
      let test = guesses.concat(answer.toLowerCase().split(""))
      console.log('player wrote:', test.join(","))

      return next(word,test)
  })
}


// Helper function, give a new word from a sentence:

function generateWord(){
    let sentence = "depiction of a large writhing naked woman, whose prominent pudendum would be only more evident when viewed from below saw him accused of pornography and the public prosecutor was called Although the ministry stood by him when Jurisprudence which featured a penitent encircled by a formless squidlike creature caused further disquiet a decision was made to permanently display the paintings in a gallery"

    wordList = sentence
      .split(" ")
      .filter(x => x.length > 5)

    let randomIndex = Math.floor(Math.random()* wordList.length)

    return wordList[randomIndex]
}


// Helper function, draw the image:

function drawImage(x){
    const hangSteps = [
  `






  `,
  `






  _______`,
  `
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |      (_)
     |      \\|/
     |       |
     |      / \\
     |
  ___|___`
]

  return hangSteps[x]
}


//(5) Call:

next(generateWord(), [])
