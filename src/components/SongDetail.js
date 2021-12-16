import React from 'react';
import { connect } from 'react-redux';

const SongDetail =({song}) => {
    //Output all props passed in from mapStateToProps
    // console.log(props);
    if (! song) {
        return <div>Select a song</div>;
    }
    console.log(song.title);
    return (
        <div>
            <h3>
                Details for:
            </h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    // Pull out only the state we care about and return it as an obj from the function
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);