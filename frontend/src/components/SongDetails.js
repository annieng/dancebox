import React, {Component} from 'react';

class SongDetails extends Component {
    render() {
        // req.params will only return a string and songId
        // let songs = this.props.songs
        // let songId = Number(this.props.match.params.songId)
        
        const { songs } = this.props 
        const { songId } = this.props.match.params

        return (
            <div>
                {/* <img src={this.props.songs.img}/> */}
                <h1>{songs[songId].title}</h1>
                <p>{songs[songId].description}</p>
                <button onClick={() => { this.props.playSong(songId) }}> &#9658; </button>
                
            </div> 
        )
    }
}

export default SongDetails;