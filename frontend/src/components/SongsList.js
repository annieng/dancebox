import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SongsList extends Component {
    render() {
        let songs = this.props.songs
        let songsJSX = songs.map((song, i) => {
            return <SongsListItem 
                song={song} 
                id={song.id} 
                playSong={this.props.playSong} 
                songs={this.props.songs} 
                key={i} />
            
        })
        return (
            <div className='container songsList'>
                <ul>
                  {songsJSX}
                </ul>

            </div>
        )
    }
}

class SongsListItem extends Component {
    render() {

        return(
            
            <div>
            <li> 
                <button className='button2' onClick={() => { this.props.playSong(this.props.id) }}> &#9658; </button>
                <Link to={`/${this.props.song.id}`}>{this.props.song.title}</Link>
                
            </li>
            </div>
        )
    }
}

export default SongsList;
