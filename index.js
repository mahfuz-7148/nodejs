// console.log(global)
// console.log(globalThis )
// const a = 5
// console.log(global.a) // undefined
// console.log(__dirname)
// console.log(__filename)

// import people from './people';
// import _ from 'lodash'

// console.log(people)
// console.log(people.people)
// console.log(people.a)
// people.test()
// console.log(_.first(people))
// console.log(_.last(people))

// import fs from 'fs'
// fs.writeFileSync('ourFile.txt', 'hi developers')
// fs.appendFileSync('ourFile.txt', ' hello developers')
// const file = fs.readFileSync('ourFile.txt')
// console.log(file)
// console.log(file.toString())
// fs.readFile('ourFile.txt', (err, data) => {
//   console.log(data.toString())
//
// })
// console.log('heyy')

// import EventEmitter from 'events'
// const emitter = new EventEmitter()
// emitter.on('bell', () => {
//   console.log('runnnn')
// })

// emitter.on('bell', ({period, text}) => {
//   console.log(`runnnn cause ${period} and ${text}`)
// })
// setTimeout(() => {
//   emitter.emit('bell', {
//     period: 'second',
//     text: 'period started devs'
//   })
// }, 2000)

// import School from './school'
// const school = new School()
// school.on('bell', ({period, text}) => {
//   console.log(`runnnn cause ${period} and ${text}`)
// })
// school.startPeriod()


// import http from 'http'
// const server = http.createServer()
// server.on('connection', () => {
//   console.log('connection on')
// })
// server.listen(3000)
// console.log('listening on port 3000')

// import http from 'http'
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('hello devs')
//     res.write(' hello developers')
//     res.end()
//   } else if (req.url === '/about') {
//     res.write('hello devs its about page')
//     res.end()
//   } else {
//     res.write('not found')
//     res.end()
//   }
// })
// server.listen(3000)
// console.log('listening on port 3000')


// import fs from 'fs'
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8')
// ourReadStream.on('data', chunk => {
//   console.log(chunk)
// })

import fs from 'fs'
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`)
ourReadStream.on('data', chunk => {
  console.log(chunk.toString())
})
