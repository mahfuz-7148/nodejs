import mathLibrary from './lib/math'
import quotesLibrary from './lib/quotes/index'

const app = {}
app.config = {
  timeBetweenQuotes: 1000
}

app.printQuote = function printQuote() {
  const allQuotes = quotesLibrary.allQuotes()
  const numberOfQuotes = allQuotes.length
  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes)
  const selectedQuote = allQuotes[randomNumber - 1]
  console.log(selectedQuote)
}

app.indefiniteLoop = function indefiniteLoop() {
  setInterval(app.printQuote, app.config.timeBetweenQuotes)
}

app.indefiniteLoop()