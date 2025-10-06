import mathLibrary from './lib/math'
import quotesLibrary from './lib/quotes/index'

const app = {}
app.config = {
  timeBetweenQuotes: 1000
}

// app.printQuote = function printQuote() {
//   const allQuotes = quotesLibrary.allQuotes()
//   const numberOfQuotes = allQuotes.length
//   const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes)
//   const selectedQuote = allQuotes[randomNumber - 1]
//   console.log(selectedQuote)
// }

let currentIndex = 0
app.printQuote = function() {
  const allQuotes = quotesLibrary.allQuotes()
  console.log(allQuotes[currentIndex])
  currentIndex = (currentIndex + 1) % allQuotes.length
}

const intervalId = setInterval(app.printQuote, 1000)
setTimeout(() => {
  clearInterval(intervalId)
  console.log('Stopped!')
}, 5000)

// app.indefiniteLoop = function indefiniteLoop() {
//   setInterval(app.printQuote, app.config.timeBetweenQuotes)
// }
//
// app.indefiniteLoop()