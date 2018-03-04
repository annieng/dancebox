import React, { Component } from 'react';
// import axios from 'axios'


import {Route, Link} from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';

class App extends Component {
  constructor() {
    super()

    this.state = {
      songPlaying: '',
      index: 0,
      isPlaying: false
    }
  }

  playPause = (index, isPlaying) => {
    isPlaying = this.state.isPlaying
    if(!isPlaying) {
      this.audioPlayer.play()
    } else {
      this.audioPlayer.pause()
    }
    this.setState({
      isPlaying: !isPlaying
    }, console.log(this.state.isPlaying))
  }

  playSong = (i) => {
    this.setState({
      isPlaying: true,
      index: i
    }, ()=> {
      this.audioPlayer.load()
      this.audioPlayer.play()
    }, console.log(this.state.isPlaying))
  }

  changeSong = (i) => {
    this.setState({
      index: this.state.index + i
    }, () => {
      console.log(this.props.songs[this.state.index])
      if(this.state.isPlaying === false) {
        this.audioPlayer.load()
      } else {
        this.audioPlayer.load()
        this.audioPlayer.play()
      }
    })
  }

  componentDidUpdate(isPlaying) {
    
    isPlaying = this.state.isPlaying
    console.log(isPlaying)
    if(!isPlaying) {
      this.audioPlayer.pause()
    } else {
      this.audioPlayer.play()
    }
  }

  render() {
    console.log(this.props.songs.length)
    return (
      <div className="App"> 
        <div className="container-fluid">
        <header>
            <h3> ~ &#160;pacific riviera&#160; ~ </h3>
            <h4><Link to='/' className='link'> ~ &#160; songs for a day on the coast ~ </Link></h4>
        </header>

        <Route exact path="/" render={()=><SongsList songs={this.props.songs} playSong={this.playSong} />}/>
        <Route path='/:songId'render={(props)=><SongDetails songs={this.props.songs} playSong={this.playSong} {...props}/> }/>

        
        <div className='audio-controls'>
          <audio ref={(self) => {this.audioPlayer = self}}>
            <source src={this.props.songs[this.state.index].source} />
          </audio>
          <button type="button" className='button1' onClick={() => { this.changeSong(-1) }} disabled={this.state.index === 0} >&#9001;&#9001;</button>
          <button type="button" className='button1' onClick={() => { this.playPause(this.state.index, this.state.isPlaying) }} label='play'> {this.state.isPlaying ? 'pause' : 'play' } </button>
          <button type="button" className='button1' onClick={() => { this.changeSong(+1) }}  disabled={this.state.index === this.props.songs.length - 1}>&#9002;&#9002;</button>
        </div>
        
       </div>
      </div>
    );
  }

}

export default App;
