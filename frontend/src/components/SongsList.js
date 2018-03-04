import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SongsList extends Component {
    render() {
        let songs = this.props.songs
        let songsJSX = songs.map((song, i) => {
            return <SongsListItem 
                song={song} 
                id={song.id} 
                artist={song.artist}
                playSong={this.props.playSong} 
                songs={this.props.songs} 
                key={i} />
            
        })
        return (
            <table className='container'>
                <thead>
                    <tr>
                        <th></th>
                        <th>SONG</th>
                        <th>ARTIST</th>
                    </tr>
                </thead>
                  {songsJSX}


            </table>
        )
    }
}

class SongsListItem extends Component {
    render() {

        return(    
            <tbody>
                <tr>
                    <td><button className='button2' onClick={() => { this.props.playSong(this.props.id) }}> &#9658; </button></td>
                    <td><Link to={`/${this.props.song.id}`} className='link'>{this.props.song.title}</Link></td>
                    <td>{this.props.song.artist}</td>
                </tr>
            </tbody>    
        )
    }
}

export default SongsList;
            // <li className='song-list'> 
            //     <button className='button2' onClick={() => { this.props.playSong(this.props.id) }}> &#9658; </button>
            //     <Link to={`/${this.props.song.id}`} className='link'>&#160;&#160;&#160;{this.props.song.title}</Link>
            // </li>