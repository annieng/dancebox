import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './skeleton/css/normalize.css'
import './skeleton/css/skeleton.css'
import './index.css';


function Song(source, title, description, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/music/bubbleworld.mp3', 'Bubble World', `An effervescent foray into Vancouver's favorite bbt spot`, 0),
  new Song('/music/positive-pressure.mp3', 'Postive Pressure', 'Venture into the deep, dark recesses of coastal BC' , 1),
  new Song('/music/thirstin.mp3', `Thirstin'`, 'Smooth and suave, a song of lust and longing', 2)
]

ReactDOM.render((
  <Router>
    <App songs={songs} />
  </Router>
),document.getElementById('root'));
