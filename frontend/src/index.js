import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './skeleton/css/normalize.css'
import './skeleton/css/skeleton.css'
import './index.css';


function Song(source, title, artist, description, albumArt, id) {
  this.source = source;
  this.title = title;
  this.artist  = artist;
  this.description = description;
  this.albumArt = albumArt
  this.id = id;
}

const songs = [
  new Song('/music/bubbleworld.mp3', 'Bubble World', 'Pender Street Steppers',  `An effervescent foray into Vancouver's favorite bbt spot`, '/album-art/bubbleworld.png', 0),
  new Song('/music/positive-pressure.mp3', 'Postive Pressure', 'Neo Image', 'Venture into the deep, dark recesses of coastal BC', '/album-art/neoimage.png', 1),
  new Song('/music/thirstin.mp3', `Thirstin'`, 'Jack J', 'Smooth and suave, a song of lust and longing', '/album-art/thirstin.png', 2),
  new Song('/music/wet-summer.mp3', 'Wet Summer', 'Seb Wildblood', 'Get wavy on the seashore, sounds of longing and nostalgia for a summer past', '/album-art/onewithemotion.png',  3)
]

ReactDOM.render((
  <Router>
    <App songs={songs} />
  </Router>
),document.getElementById('root'));
