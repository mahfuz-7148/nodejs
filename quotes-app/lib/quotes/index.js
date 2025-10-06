import fs from 'fs'

const quotes = {}
quotes.allQuotes = function allQuotes() {
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8')
  const arrayOfQuotes = fileContents.split(/\r?\n/)
  return arrayOfQuotes
}
export default quotes
