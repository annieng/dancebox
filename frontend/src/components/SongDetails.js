import React, {Component} from 'react';

class SongDetails extends Component {
    render() {
        // req.params will only return a string and songId
        // let songs = this.props.songs
        // let songId = Number(this.props.match.params.songId)
        
        const { songs } = this.props 
        const { songId } = this.props.match.params

        return (
            <div className='container'>
                {/* <img src={this.props.songs.img}/> */}
                <h3 className='song-title'>{songs[songId].title.toUpperCase()}</h3>
                <img className='album-art' src={this.props.songs[songId].albumArt} alt='album art'/>
                <h5>{songs[songId].description}</h5>
                <button className='button3' onClick={() => { this.props.playSong(songId) }}> &#9658; </button>
                
            </div> 
        )
    }
}

export default SongDetails;