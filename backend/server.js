const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.argv[2] | 4420



// installing middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// data

function Song(source, title, description, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/music/bubbleworld.mp3', 'Bubble World', `An effervescent foray into Vancouver's favorite bbt spot`, 0),
  new Song('/music/positive-pressure.mp3', 'Postive Pressure', 'Venture into the deep, dark recesses of coastal BC', 1),
  new Song('/music/thirstin.mp3', `Thirstin'`, 'Smooth and suave, a song of lust and longing', 2)
]

app.get('/', (req, res) => {

  if (songs) res.json(somngs)
  else res.json({ status: 'error', error: 'songs not found' })

})

app.listen(port, () => {
  console.log('welcome to the high life baby on port: ' + port)
})