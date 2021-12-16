import React, {Component} from 'react';
import { connect } from 'react-redux';

// import create action
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        // return jsx elements from the songs array
        return this.props.songs.map((song) => {
            //Return the array from the renderList element
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        {/*Call the actionCreator selectSong passed in from connect*/}
                        <button 
                            className="ui button primary"
                            onClick={()=>{this.props.selectSong(song)}}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        /* exporting the connect helper below, makes all state and action creators,
            passed in, available in the components render method, thru props. */
        // console.log(this.props);
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>);
    }
}

// Each time the state changes the mapStateToProps
//  runs.  It converts state to props
const mapStateToProps = (state) => {
    // console.log(state);
    //change the state to a prop, we can access via this.props.songs inside of our components
    return { 
        songs: state.songs,
        // favoriteTitle: state.favoriteTitle
    };
}

// call with the state from our redux store
// configure connect by passing it mapStateToProps
// pass in selectSong action creator and pass it into our component as a prop
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);