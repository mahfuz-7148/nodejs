import fs from 'fs'

const quotes = {}
quotes.allQuotes = function allQuotes() {
  try {
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8')
    return fileContents.split(/\r?\n/).filter(q => q.trim() !== '')
  } catch (err) {
    console.error('Error reading quotes:', err)
    return ['No quotes available']
  }
}
export default quotes
